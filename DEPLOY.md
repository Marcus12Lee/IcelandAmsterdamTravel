# Deploy to Vercel – step-by-step

Your project is ready: git is initialized and the first commit is done. Follow these steps to put it online.

---

## Step 1: Create a GitHub repository

1. Go to **https://github.com/new**
2. **Repository name:** e.g. `iceland-travel` (or any name you like)
3. Choose **Public**
4. **Do not** add a README, .gitignore, or license (you already have them)
5. Click **Create repository**

---

## Step 2: Push your code to GitHub

In Terminal, run these commands (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name):

```bash
cd /Users/gotomarslalala/Workplace/src/IcelandTravel

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

When prompted, sign in to GitHub (or use a Personal Access Token if you use 2FA).

---

## Step 3: Deploy on Vercel

1. Go to **https://vercel.com** and sign up / log in (choose **Continue with GitHub**).
2. Click **Add New…** → **Project**.
3. **Import** your `YOUR_REPO` repository (it should appear in the list).
4. Leave all settings as they are (Vercel detects Next.js) and click **Deploy**.
5. Wait 1–2 minutes. When it’s done, you’ll see **Visit** – that’s your live URL, e.g. `https://iceland-travel-xxx.vercel.app`.

---

## Step 4 (optional): Enable weather

To make the weather module work on the live site:

1. In Vercel, open your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `OPENWEATHER_API_KEY`
   - **Value:** your OpenWeatherMap API key
3. Go to **Deployments** → click **⋯** on the latest deployment → **Redeploy**.

---

## Done

- **You:** Open the Vercel URL on your iPhone → Safari → **Share** → **Add to Home Screen**.
- **Others:** Send them the same URL; they can open it on any device.

To update the site later: change code, then run `git add .`, `git commit -m "Update"`, `git push`. Vercel will redeploy automatically.
