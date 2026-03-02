# 🚀 GitHub Actions CI/CD Guide

## 📺 Recommended YouTube Videos

### **For Complete Beginners:**

1. **Search:** `"Playwright GitHub Actions tutorial for beginners"`
   - Watch videos by: **Automation Step by Step**, **LambdaTest**, **Playwright Official**
   - Duration: 15-30 minutes
   - What you'll learn: Basic setup, running tests automatically

2. **Search:** `"GitHub Actions workflow tutorial"`
   - Watch videos by: **TechWorld with Nana**, **Fireship**
   - Duration: 20-40 minutes
   - What you'll learn: Understanding workflows, triggers, jobs

3. **Search:** `"GitHub Actions parallel testing matrix strategy"`
   - Watch videos by: **GitHub**, **The CI/CD Guy**
   - Duration: 10-20 minutes
   - What you'll learn: Running tests in parallel, batching

### **Specific Topics:**

- **Secrets Management:** `"GitHub Actions secrets environment variables"`
- **Test Reports:** `"GitHub Actions upload artifacts test reports"`
- **Parallel Execution:** `"GitHub Actions matrix build strategy"`

---

## 🎯 Your Setup - Already Done!

You have **2 workflow files** ready to use:

### **File 1:** `.github/workflows/playwright.yml`
- **Purpose:** Run all tests together (simple)
- **Use when:** You have < 50 test cases

### **File 2:** `.github/workflows/playwright-batched.yml` *(NEW)*
- **Purpose:** Run tests in parallel batches
- **Use when:** You have 100-500 test cases
- **Runs:** Tests split across 3 parallel workers

---

## 📝 Step-by-Step: Push to GitHub

### **Step 1: Create GitHub Repository**

1. Go to https://github.com
2. Click **"New repository"**
3. Name it: `qa-automation-framework`
4. Click **"Create repository"**

### **Step 2: Add Secrets to GitHub**

Before pushing, add your credentials as secrets:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these secrets:

| Secret Name | Value |
|------------|-------|
| `BASE_URL` | `https://staging.itsacheckmate.com` |
| `USER_EMAIL` | `rakesh@itsacheckmate.com` |
| `USER_PASSWORD` | Your password from `.env` |
| `TEST_LOCATION_NAME` | `Worldwide Works` |
| `TEST_LOCATION_ID` | `213554` |

**Important:** Never commit your `.env` file!

### **Step 3: Push Your Code**

Open terminal in your project folder:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - QA automation framework with 2 test cases"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/qa-automation-framework.git

# Push to GitHub
git push -u origin main
```

### **Step 4: Watch Tests Run Automatically!**

1. Go to your GitHub repository
2. Click the **"Actions"** tab
3. You'll see your workflow running
4. Click on it to watch live progress

---

## 🎛️ Running Tests in Batches

### **Current Setup:**

The **`playwright-batched.yml`** workflow runs tests in **3 parallel batches**.

**How it works:**
- If you have 30 tests → Each batch runs 10 tests
- If you have 300 tests → Each batch runs 100 tests
- All batches run at the same time (parallel)

### **To Change Batch Count:**

Edit `.github/workflows/playwright-batched.yml`, line 21:

```yaml
# Run in 5 batches instead of 3
matrix:
  shard: [1, 2, 3, 4, 5]
```

### **To Run Specific Number of Tests Per Batch:**

Use Playwright's `--shard` option (already configured):

```bash
# Example: Run tests in groups of 10
npx playwright test --shard=1/10  # Runs 1st 10%
npx playwright test --shard=2/10  # Runs 2nd 10%
```

---

## 🔄 How to Trigger Tests

### **Automatic Triggers:**

Tests run automatically on:
- ✅ **Push** to `main`, `master`, or `develop` branch
- ✅ **Pull Request** to these branches

### **Manual Trigger:**

1. Go to GitHub → **Actions** tab
2. Click **"Playwright Tests (Batched Execution)"**
3. Click **"Run workflow"**
4. Click the green **"Run workflow"** button

---

## 📊 Viewing Test Results

### **On GitHub:**

1. Go to **Actions** tab
2. Click on the workflow run
3. Scroll to **Artifacts** section
4. Download:
   - `final-test-dashboard` - Complete dashboard
   - `playwright-results-shard-X` - Individual batch results

### **Download Dashboard:**

1. Click **Artifacts** → **final-test-dashboard**
2. Download and extract the ZIP
3. Open `dashboard.html` in your browser

---

## 🎯 Recommended Workflow for 500 Test Cases

### **Organize Tests in Folders:**

```
tests/
  ├── batch-01/  (TC-001 to TC-050)
  ├── batch-02/  (TC-051 to TC-100)
  ├── batch-03/  (TC-101 to TC-150)
  └── ...
```

### **Run Different Batches:**

```yaml
# In your workflow file
strategy:
  matrix:
    batch: [batch-01, batch-02, batch-03, ...]

steps:
  - run: npx playwright test tests/${{ matrix.batch }}
```

---

## 💡 Pro Tips

### **Tip 1: Use Tags for Grouping**

Add tags to your tests:

```typescript
test('TC-001: Login Test @smoke @critical', async ({ page }) => {
  // test code
});
```

Run specific tags in GitHub Actions:

```bash
npx playwright test --grep @smoke
```

### **Tip 2: Schedule Regular Runs**

Add this to your workflow to run tests daily:

```yaml
on:
  schedule:
    - cron: '0 9 * * *'  # Run at 9 AM every day
```

### **Tip 3: Notify on Failures**

Add Slack/Email notifications when tests fail (search YouTube: "GitHub Actions notifications")

---

## 📚 Additional Resources

### **Official Documentation:**
- GitHub Actions: https://docs.github.com/actions
- Playwright CI: https://playwright.dev/docs/ci

### **Community:**
- GitHub Actions Forum: https://github.community
- Playwright Discord: https://aka.ms/playwright/discord

---

## 🆘 Common Issues & Solutions

### **Issue 1: Tests fail on GitHub but pass locally**

**Solution:** Missing environment variables
- Check GitHub Secrets are set correctly
- Verify `.env` values match secrets

### **Issue 2: Tests timeout on GitHub**

**Solution:** Increase timeout in workflow:
```yaml
timeout-minutes: 120  # Increase from 60
```

### **Issue 3: Can't see test results**

**Solution:** Download artifacts from Actions tab

---

## ✅ Quick Checklist

Before pushing to GitHub:

- [ ] Added all secrets to GitHub repository
- [ ] `.env` is in `.gitignore` (already done)
- [ ] Committed all test files
- [ ] Choose workflow: `playwright.yml` or `playwright-batched.yml`
- [ ] Tests pass locally: `npm test`

---

**Need Help?** Watch the YouTube videos mentioned at the top! They show these exact steps visually. 🎬
