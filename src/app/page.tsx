import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

const finalSitePath = path.join(process.cwd(), "snowball final site.html");
const finalSiteHtml = fs.readFileSync(finalSitePath, "utf8");

const stylePattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const scriptPattern = /<script[^>]*>([\s\S]*?)<\/script>/gi;

type ExternalScript = {
  src: string;
  async: boolean;
  defer: boolean;
};

function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match?.[1]) {
    throw new Error("Unable to find <body> in snowball final site.html");
  }

  return match[1].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").trim();
}

function extractInlineBlocks(html: string, pattern: RegExp) {
  return Array.from(html.matchAll(pattern), (match) => match[1]?.trim() ?? "")
    .filter(Boolean)
    .join("\n");
}

function extractExternalScripts(html: string): ExternalScript[] {
  const fullPattern = /<script([^>]*)>\s*<\/script>/gi;

  return Array.from(html.matchAll(fullPattern), (match) => {
    const attrs = match[1] ?? "";
    const srcMatch = attrs.match(/\bsrc\s*=\s*"([^"]+?)"/i);

    if (!srcMatch?.[1]) {
      return null;
    }

    return {
      src: srcMatch[1],
      async: /\basync\b/i.test(attrs),
      defer: /\bdefer\b/i.test(attrs),
    };
  }).filter((script): script is ExternalScript => Boolean(script));
}

const bodyHtml = extractBody(finalSiteHtml);
const inlineStyles = extractInlineBlocks(finalSiteHtml, stylePattern);
const inlineScripts = extractInlineBlocks(finalSiteHtml, scriptPattern);
const externalScripts = extractExternalScripts(finalSiteHtml);

export default function Home() {
  return (
    <>
      {inlineStyles ? <style dangerouslySetInnerHTML={{ __html: inlineStyles }} /> : null}
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {inlineScripts ? (
        <Script id="snowball-inline-script" strategy="beforeInteractive">
          {inlineScripts}
        </Script>
      ) : null}
      {externalScripts.map((script) => (
        <Script
          key={script.src}
          src={script.src}
          strategy="afterInteractive"
          async={script.async}
          defer={script.defer}
        />
      ))}
    </>
  );
}
