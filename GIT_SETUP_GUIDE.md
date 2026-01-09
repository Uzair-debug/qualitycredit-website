# Step-by-Step Git Integration Guide

Follow these steps in order. Don't skip ahead!

---

## STEP 1: Create a GitHub Account

1. Go to: https://github.com
2. Click "Sign up" in the top right corner
3. Enter your email address (use a real one - you'll need to verify it)
4. Choose a username (e.g., `yourname` or `qualitycredit`)
5. Choose a password (make it strong!)
6. Solve the puzzle verification
7. Click "Create account"
8. Check your email and verify your account
9. **Write down your username and password somewhere safe!**

⏱️ **Time needed:** 2-3 minutes

---

## STEP 2: Create a GitHub Repository

1. Log into GitHub (if not already logged in)
2. Look at the top right corner - click the **"+"** icon
3. Click **"New repository"** from the dropdown menu
4. Fill in the form:
   - **Repository name:** `qualitycredit-website` (or any name you want)
   - **Description:** (optional) "Quality Credit & Legal website"
   - **Visibility:** Choose **Public** (free) or **Private** (also free)
   - **DO NOT** check "Initialize this repository with a README"
   - **DO NOT** add .gitignore or license
5. Click the green **"Create repository"** button
6. You'll see a page with instructions - **DON'T follow them yet!** Just keep this page open

⏱️ **Time needed:** 1 minute

---

## STEP 3: Navigate to Your Project Folder

1. Open **PowerShell** (search for "PowerShell" in Windows Start menu)
   - OR open **Command Prompt** (search for "cmd")
2. Type this command and press Enter:
   ```
   cd "C:\Users\Mogamad\OneDrive\Desktop\Debt Review Company"
   ```
3. Press Enter
4. You should see the path change to your project folder

**If you get an error:** Make sure you typed the path correctly with quotes around it!

⏱️ **Time needed:** 30 seconds

---

## STEP 4: Initialize Git in Your Project

1. In PowerShell/Command Prompt, type:
   ```
   git init
   ```
2. Press Enter
3. You should see: "Initialized empty Git repository in..."
4. **This is good!** Git is now tracking your folder

⏱️ **Time needed:** 10 seconds

---

## STEP 5: Add All Your Files to Git

1. Still in PowerShell/Command Prompt, type:
   ```
   git add .
   ```
2. Press Enter
3. **No output is normal!** This means it worked

**What this does:** Tells Git to track all files in your folder

⏱️ **Time needed:** 10 seconds

---

## STEP 6: Make Your First Commit

1. Type:
   ```
   git commit -m "Initial website upload with phone number updates"
   ```
2. Press Enter
3. The first time you do this, Git might ask you to configure your identity
4. If you see a message about "Please tell me who you are", do this:
   - Type: `git config --global user.email "your-email@example.com"`
     - Replace `your-email@example.com` with your actual email
   - Press Enter
   - Type: `git config --global user.name "Your Name"`
     - Replace `Your Name` with your actual name (or username)
   - Press Enter
   - Then run the commit command again: `git commit -m "Initial website upload with phone number updates"`

⏱️ **Time needed:** 30 seconds - 2 minutes

---

## STEP 7: Connect Your Local Folder to GitHub

1. Go back to the GitHub page where you created the repository
2. You'll see a section that says "Quick setup" with a URL that looks like:
   ```
   https://github.com/YOUR_USERNAME/qualitycredit-website.git
   ```
3. Copy that entire URL (click the copy button next to it)
4. Go back to PowerShell/Command Prompt
5. Type:
   ```
   git remote add origin PASTE_YOUR_URL_HERE
   ```
   - Replace `PASTE_YOUR_URL_HERE` with the URL you copied
   - Example: `git remote add origin https://github.com/yourname/qualitycredit-website.git`
6. Press Enter
7. **No output is normal!** This means it worked

⏱️ **Time needed:** 1 minute

---

## STEP 8: Set the Main Branch Name

1. Type:
   ```
   git branch -M main
   ```
2. Press Enter
3. **No output is normal!** This means it worked

⏱️ **Time needed:** 10 seconds

---

## STEP 9: Upload Your Files to GitHub

1. Type:
   ```
   git push -u origin main
   ```
2. Press Enter
3. **GitHub will ask you to log in!**
   - You might see a window asking for credentials
   - **Username:** Enter your GitHub username
   - **Password:** Enter your GitHub password (or create a Personal Access Token)

**If it asks for a password and your regular password doesn't work:**
- GitHub no longer accepts passwords for Git operations
- You need to create a Personal Access Token instead
- See "CREATING A PERSONAL ACCESS TOKEN" section below

4. Wait for the files to upload (you'll see progress messages)
5. You should see: "To https://github.com/..."
6. Go back to GitHub and refresh your repository page
7. **You should now see all your files!** 🎉

⏱️ **Time needed:** 1-3 minutes

---

## STEP 10: Connect GitHub to Netlify

1. Go to: https://app.netlify.com
2. Log in to your Netlify account
3. Click on your site (the one that's already live)
4. Go to: **Site settings** (in the top menu)
5. Click: **Build & deploy** (in the left sidebar)
6. Find the section: **Continuous Deployment**
7. Click: **Link to Git provider** (or "Connect to Git")
8. Click: **GitHub** (it might ask you to authorize Netlify)
9. If asked, click **Authorize Netlify** or **Install**
10. You might see a list of repositories - select **qualitycredit-website** (or whatever you named it)
11. Netlify will auto-detect settings (usually works automatically)
12. Click **Deploy site** or **Save**

⏱️ **Time needed:** 2-3 minutes

---

## STEP 11: Wait for First Automatic Deployment

1. You should see a new deployment start automatically
2. Wait 1-2 minutes for it to complete
3. Once it shows "Published", your site is live!
4. Visit: https://qualitycredit.co.za to verify

⏱️ **Time needed:** 1-2 minutes

---

## ✅ YOU'RE DONE! Future Updates Are Now Automatic

From now on, whenever you make changes:

1. Edit your files (like you did with the phone numbers)
2. Open PowerShell/Command Prompt
3. Navigate to your folder:
   ```
   cd "C:\Users\Mogamad\OneDrive\Desktop\Debt Review Company"
   ```
4. Add changes:
   ```
   git add .
   ```
5. Commit:
   ```
   git commit -m "Description of what you changed"
   ```
6. Push to GitHub:
   ```
   git push
   ```
7. **That's it!** Netlify will automatically deploy within 1-2 minutes!

---

## 🔐 CREATING A PERSONAL ACCESS TOKEN (If Needed)

If Step 9 asks for a password and your regular password doesn't work:

1. Go to: https://github.com/settings/tokens
2. Click: **Generate new token** → **Generate new token (classic)**
3. Give it a name: `Netlify Deployment`
4. Select scopes:
   - Check **repo** (this selects all repo permissions)
5. Click: **Generate token** (scroll to bottom)
6. **COPY THE TOKEN IMMEDIATELY!** (It won't show again)
7. Go back to PowerShell/Command Prompt
8. When it asks for password, **paste the token instead of your password**
9. Press Enter

**Save this token somewhere safe!** You might need it again.

---

## ❓ TROUBLESHOOTING

### Problem: "fatal: not a git repository"
**Solution:** You're not in the right folder. Use `cd` command to navigate to your project folder first.

### Problem: "remote origin already exists"
**Solution:** The folder is already connected to GitHub. Skip Step 7.

### Problem: "Please tell me who you are"
**Solution:** Follow the instructions in Step 6 to set your email and name.

### Problem: "Authentication failed"
**Solution:** 
- Double-check your username
- Use a Personal Access Token instead of password (see section above)
- Make sure you copied the token correctly

### Problem: "Nothing to commit"
**Solution:** This means all changes are already committed. That's okay! Just push: `git push`

### Problem: "Failed to push"
**Solution:**
- Make sure you're connected to the internet
- Try again: `git push -u origin main`
- Check that your repository URL is correct

---

## 📝 COMMON GIT COMMANDS YOU'LL USE

```bash
# Check status (see what files changed)
git status

# Add all changed files
git add .

# Commit changes with a message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes from GitHub (if working from multiple computers)
git pull
```

---

## 🎉 CONGRATULATIONS!

You've successfully set up automatic deployments! Now every time you make changes and push to GitHub, Netlify will automatically update your live website.

Need help? Ask me any questions!
