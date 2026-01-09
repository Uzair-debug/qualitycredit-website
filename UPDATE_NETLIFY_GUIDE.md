# How to Update Your Website on Netlify

## Method 1: Drag and Drop (Quick Update) ✅ RECOMMENDED FOR YOUR SITUATION

Since you already used drag and drop to deploy, this is the fastest way to update:

### Steps:

1. **Prepare Your Files**
   - Make sure all your updated files (contact.html, index.html, location.html, about.html, privacy.html) are in your project folder
   - You don't need to zip them - just have the folder ready

2. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Log in to your account
   - You should see your site listed (probably named "qualitycredit" or similar)

3. **Find Your Site**
   - Click on your site name to open the site dashboard

4. **Deploy New Version**
   - Look at the top of the page - you'll see a section that says "Deploys" or "Production deploys"
   - Find the area that says "Publish directory" or "Deploys" tab
   - You should see a box that says "Want to deploy a new version of this site? Drag and drop your site output folder here"
   - OR look for a button that says "Deploys" → "Trigger deploy" → "Deploy site"

5. **Drag Your Updated Folder**
   - Open File Explorer on your computer
   - Navigate to: `C:\Users\Mogamad\OneDrive\Desktop\Debt Review Company`
   - Select ALL files and folders in this directory:
     - index.html
     - contact.html
     - services.html
     - process.html
     - location.html
     - about.html
     - faq.html
     - privacy.html
     - styles.css
     - banner2.jpg
     - logo.jpg
     - sitemap.xml
     - robots.txt
     - 404.html
     - Any other files you have
   - Drag all these files into the Netlify deploy box
   - OR if there's a "Browse" button, click it and select all your files

6. **Wait for Deployment**
   - Netlify will process your files (usually takes 30-60 seconds)
   - You'll see a progress indicator
   - Once complete, you'll see "Published" status

7. **Verify the Update**
   - Visit your website: https://qualitycredit.co.za
   - Check that the phone numbers are updated
   - Test the contact page to see the new phone numbers

---

## Method 2: Git Integration (Better for Future Updates) 🚀

This method automatically updates your site whenever you make changes. Set it up once, then updates are automatic.

### Setup Steps:

#### Step 1: Create a GitHub Account (if you don't have one)
1. Go to: https://github.com
2. Sign up for a free account

#### Step 2: Create a Repository
1. Log into GitHub
2. Click the "+" icon in top right → "New repository"
3. Name it: `qualitycredit-website` (or any name you want)
4. Make it **Public** or **Private** (your choice)
5. **DON'T** check "Initialize with README"
6. Click "Create repository"

#### Step 3: Install Git (if not installed)
1. Download Git: https://git-scm.com/download/win
2. Install it with default settings
3. Restart your computer if needed

#### Step 4: Upload Your Files to GitHub
1. Open PowerShell or Command Prompt
2. Navigate to your project folder:
   ```
   cd "C:\Users\Mogamad\OneDrive\Desktop\Debt Review Company"
   ```

3. Initialize Git:
   ```
   git init
   ```

4. Add all files:
   ```
   git add .
   ```

5. Commit the files:
   ```
   git commit -m "Initial commit - website files"
   ```

6. Connect to GitHub (replace YOUR_USERNAME with your GitHub username):
   ```
   git remote add origin https://github.com/YOUR_USERNAME/qualitycredit-website.git
   ```

7. Push to GitHub:
   ```
   git branch -M main
   git push -u origin main
   ```
   - You'll be asked for your GitHub username and password/token

#### Step 5: Connect GitHub to Netlify
1. Go back to Netlify dashboard
2. Click on your site
3. Go to: **Site settings** → **Build & deploy** → **Continuous Deployment**
4. Click "Link to Git provider"
5. Choose "GitHub"
6. Authorize Netlify to access GitHub
7. Select your repository: `qualitycredit-website`
8. Netlify will auto-detect settings (it should work automatically)
9. Click "Deploy site"

#### Step 6: Future Updates (Now Automatic!)
Every time you make changes:
1. Make your edits locally (like you just did)
2. In PowerShell/Command Prompt, navigate to your folder:
   ```
   cd "C:\Users\Mogamad\OneDrive\Desktop\Debt Review Company"
   ```
3. Add your changes:
   ```
   git add .
   ```
4. Commit:
   ```
   git commit -m "Updated phone numbers"
   ```
5. Push to GitHub:
   ```
   git push
   ```
6. **That's it!** Netlify will automatically detect the change and deploy within 1-2 minutes!

---

## Quick Comparison

### Drag and Drop (Method 1)
✅ **Pros:**
- Simple - no setup needed
- Works immediately
- Good for occasional updates

❌ **Cons:**
- Manual process every time
- Need to remember to deploy after changes
- Easy to forget a file

### Git Integration (Method 2)
✅ **Pros:**
- Automatic deployments
- Version history (you can see all past changes)
- Professional workflow
- Easy to collaborate with others later

❌ **Cons:**
- Takes 10-15 minutes to set up initially
- Need to learn basic Git commands

---

## Recommendation

For **right now**: Use **Method 1 (Drag and Drop)** to get your phone number updates live quickly.

For **the future**: Set up **Method 2 (Git Integration)** when you have 15 minutes. It will save you time in the long run!

---

## Troubleshooting

**Problem:** "Deploy failed" error
- **Solution:** Make sure all files are included (especially styles.css and images)

**Problem:** Changes not showing up
- **Solution:** Clear your browser cache (Ctrl + Shift + Delete) or try incognito mode

**Problem:** Site looks broken after update
- **Solution:** Make sure you uploaded ALL files, not just the HTML files

---

## Need Help?

If you run into any issues, let me know what error message you see and I can help troubleshoot!
