# 📋 Commands Cheat Sheet - Copy & Paste Ready

## 🎯 First Time Setup (Run Once)

### Install Dependencies
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

---

## 🎬 Recording New Tests

### Start Recording (Basic)
```bash
npm run codegen
```

### Start Recording with URL
```bash
npm run codegen https://your-website-url.com
```

### Record with Specific Browser
```bash
npx playwright codegen --browser chromium https://your-website-url.com
npx playwright codegen --browser firefox https://your-website-url.com
npx playwright codegen --browser webkit https://your-website-url.com
```

---

## ▶️ Running Tests

### Run All Tests (Headless - No Browser Window)
```bash
npm test
```

### Run All Tests (Headed - See Browser)
```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Tests in Debug Mode (Step-by-Step)
```bash
npm run test:debug
```

### Run a Specific Test Folder
```bash
npx playwright test tests/test-case-001
```

### Run Multiple Specific Test Folders
```bash
npx playwright test tests/test-case-001 tests/test-case-002 tests/test-case-003
```

### Run Tests by Name Pattern (Contains "login")
```bash
npx playwright test --grep "login"
```

### Run Tests by Test Case ID
```bash
npx playwright test --grep "TC-001"
```

### Run All Tests Starting with TC-1 (TC-100 to TC-199)
```bash
npx playwright test --grep "TC-1[0-9][0-9]"
```

### Run on Specific Browser Only
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Viewing Reports

### Open HTML Test Report
```bash
npm run report
```

### Open Latest Report Directly
```bash
npx playwright show-report
```

---

## 🔍 Debugging

### Debug a Specific Test
```bash
npx playwright test tests/test-case-001 --debug
```

### Run Test with Trace Viewer
```bash
npx playwright test --trace on
```

### Open Trace Viewer
```bash
npx playwright show-trace trace.zip
```

---

## 📁 Git Commands (For GitHub CI/CD)

### Initialize Git (First Time)
```bash
git init
```

### Check Status
```bash
git status
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Added test cases TC-001 to TC-050"
```

### Add Remote Repository (First Time)
```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

### Push to GitHub
```bash
git push -u origin main
```

### Push Updates (After First Push)
```bash
git push
```

### Pull Latest Changes
```bash
git pull
```

---

## 🛠️ Useful Playwright Commands

### Update Playwright to Latest Version
```bash
npm install @playwright/test@latest
```

### Re-install Browsers
```bash
npx playwright install --force
```

### List All Installed Browsers
```bash
npx playwright install --dry-run
```

### Check Playwright Version
```bash
npx playwright --version
```

### Generate Test with Authentication State
```bash
npx playwright codegen --save-storage=auth.json
```

### Use Saved Authentication
```bash
npx playwright codegen --load-storage=auth.json
```

---

## 🎨 Advanced Running Options

### Run Tests in Parallel (Faster)
```bash
npx playwright test --workers=4
```

### Run Tests One by One (Slower but Safer)
```bash
npx playwright test --workers=1
```

### Run with Different Timeout
```bash
npx playwright test --timeout=120000
```

### Run Only Failed Tests from Last Run
```bash
npx playwright test --last-failed
```

### Run Tests and Update Snapshots
```bash
npx playwright test --update-snapshots
```

---

## 📸 Screenshots and Videos

### Take Screenshot During Test (Add to your test code)
```typescript
await page.screenshot({ path: 'screenshot.png' });
```

### Record Video (Already configured - videos saved on failure)
Videos automatically saved in `test-results/` folder

---

## 🧹 Cleanup Commands

### Clear Test Results
```bash
rm -rf test-results/
```

### Clear All Generated Reports
```bash
rm -rf test-results/ playwright-report/
```

### Clean Node Modules and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## ⚡ Quick Daily Commands

### Morning Workflow:
```bash
# Pull latest changes from team
git pull

# Run all tests
npm test

# View results
npm run report
```

### Adding New Tests:
```bash
# Record new test
npm run codegen https://your-url.com

# Run to verify it works
npm run test:headed

# Push to GitHub
git add .
git commit -m "Added TC-XXX"
git push
```

### Check Test Health:
```bash
# Run in UI mode to see all tests
npm run test:ui

# Run specific failing test in debug mode
npx playwright test tests/test-case-XXX --debug
```

---

## 💡 Pro Tips

### Run Tests Faster (Skip Videos/Screenshots)
```bash
npx playwright test --reporter=list
```

### Run and Generate Coverage
```bash
npx playwright test --reporter=html
```

### Run Tests with Custom Reporter
```bash
npx playwright test --reporter=json
```

---

## 🆘 Troubleshooting Commands

### If Tests Are Failing:

1. **Check if browsers are installed:**
```bash
npx playwright install
```

2. **Run in headed mode to see what's happening:**
```bash
npm run test:headed
```

3. **Run in debug mode:**
```bash
npm run test:debug
```

4. **Clear cache and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

---

**Bookmark this page for quick reference! 📌**
