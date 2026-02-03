# LeadSync Website Deployment Guide for goleadsyncs.com

## What You Have
- Domain: **goleadsyncs.com**
- Hosting: **Namecheap Stellar Hosting**
- Website files: Built in the `out` folder

## Deployment Steps

### Step 1: Access Your Hosting Control Panel
1. Log in to your Namecheap account at https://www.namecheap.com
2. Go to **Account** > **Dashboard**
3. Find your **Stellar Hosting** package
4. Click **Go to cPanel** or **Manage**

### Step 2: Upload Your Website Files
You have two options:

#### Option A: Using File Manager (Easier)
1. In cPanel, find and click **File Manager**
2. Navigate to the `public_html` folder
3. Delete any default files (like `index.html`, `coming-soon.html`)
4. Click **Upload** button
5. Upload all files from the `out` folder:
   - `index.html`
   - `404.html`
   - `index.txt`
   - The entire `_next` folder
6. Click "Go Back" when upload completes

#### Option B: Using FTP (For Tech-Savvy Users)
1. In cPanel, create an FTP account under **FTP Accounts**
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect to your server using the FTP credentials
4. Navigate to `public_html` folder
5. Upload all contents from the `out` folder

### Step 3: Configure DNS (If Not Already Done)
1. In Namecheap Dashboard, go to **Domain List**
2. Click **Manage** next to goleadsyncs.com
3. Go to **Advanced DNS** tab
4. Make sure you have these records:
   - **A Record**: Host = `@`, Value = Your server IP (from hosting details)
   - **A Record**: Host = `www`, Value = Your server IP
   - **CNAME Record**: Host = `www`, Value = `goleadsyncs.com`

> Your hosting IP can be found in the Stellar hosting welcome email or cPanel.

### Step 4: Wait for DNS Propagation
- DNS changes can take 1-48 hours to propagate
- Usually happens within 15-30 minutes
- Check status at: https://www.whatsmydns.net/

### Step 5: Verify Your Site
Once DNS propagates, visit:
- https://goleadsyncs.com
- https://www.goleadsyncs.com

## SSL Certificate (HTTPS)
1. In cPanel, go to **SSL/TLS Status**
2. Click **Run AutoSSL**
3. This will install a free SSL certificate for HTTPS

## Troubleshooting

### "404 Not Found" or Default Page Shows
- Make sure files are in `public_html` (not in a subfolder)
- Make sure `index.html` is in the root of `public_html`
- Clear your browser cache

### "DNS Server Not Found"
- DNS hasn't propagated yet
- Wait a few more hours
- Check DNS settings in Namecheap

### Mixed Content Warnings
- Your site should automatically work with HTTPS once SSL is installed
- If you see warnings, it's usually external resources (images/fonts)

## Need Help?
- Namecheap Support: https://www.namecheap.com/support/
- Live Chat available 24/7
- Submit a ticket through your Namecheap dashboard

## Quick Reference
- **Domain**: goleadsyncs.com
- **Hosting Type**: Stellar (cPanel)
- **Upload Location**: public_html folder
- **Files to Upload**: Everything in the `out` folder
