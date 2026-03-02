# 🚀 Quick Start Guide - For Non-Programmers

## What You'll Do in 5 Simple Steps:

### ✅ Step 1: Install Node.js (One-time setup)
1. Go to: https://nodejs.org/
2. Download the **LTS version** (the green button)
3. Install it (just click Next, Next, Finish)
4. **Done!** You now have Node.js installed

### ✅ Step 2: Setup the Framework (One-time setup)
1. Open **Terminal** (on Mac) or **Command Prompt** (on Windows)
2. Navigate to this folder:
   ```bash
   cd "/Users/rakesh/Documents/Windsurf Works/Automation"
   ```
3. Run these commands one by one:
   ```bash
   npm install
   ```
   Wait for it to finish, then:
   ```bash
   npx playwright install
   ```
4. **Done!** Everything is installed

### ✅ Step 3: Record Your First Test Case
Let's say you want to automate **Test Case #1: User Login**

1. Open Terminal in the Automation folder
2. Type this command:
   ```bash
   npm run codegen https://your-website-url.com
   ```
   Replace `https://your-website-url.com` with your actual website URL

3. **Two windows will open:**
   - 🌐 A browser window (where you perform actions)
   - 📝 A code window (where code is generated automatically)

4. **In the browser window:**
   - Click, type, navigate - do whatever your test case requires
   - For example: Click login, enter username, enter password, click submit
   - The code window will show the code being written automatically!

5. **Copy the code:**
   - Look at the code window
   - Select all the code (Cmd+A on Mac, Ctrl+A on Windows)
   - Copy it (Cmd+C on Mac, Ctrl+C on Windows)

6. **Create a new test file:**
   - Create a new folder: `tests/test-case-001/`
   - Create a new file: `tests/test-case-001/login.spec.ts`
   - Open that file and paste this template:
   ```typescript
   import { test, expect } from '@playwright/test';

   test('TC-001: User Login', async ({ page }) => {
     // PASTE YOUR COPIED CODE HERE (between these curly braces)
   });
   ```
   - Replace the comment with your copied code
   - Save the file

7. **Done!** You've created your first automated test!

### ✅ Step 4: Run Your Test
1. In Terminal, type:
   ```bash
   npm test
   ```
   This runs all your tests

2. To see the browser while testing:
   ```bash
   npm run test:headed
   ```

3. To see a nice interactive UI:
   ```bash
   npm run test:ui
   ```

### ✅ Step 5: View Results
After tests run, view the report:
```bash
npm run report
```

A browser will open showing:
- ✅ Which tests passed
- ❌ Which tests failed
- 📸 Screenshots of failures
- ⏱️ How long each test took

---

## 📝 For Test Cases 2-500: Just Repeat!

For **each test case**, follow this simple pattern:

1. **Create a folder:** `tests/test-case-XXX/` (replace XXX with number)
2. **Record using codegen:** `npm run codegen https://your-url.com`
3. **Create the test file:** `tests/test-case-XXX/test-name.spec.ts`
4. **Copy template, paste recorded code**
5. **Save**
6. **Move to next test case**

### Example:
- Test Case 2 → `tests/test-case-002/navigation.spec.ts`
- Test Case 3 → `tests/test-case-003/form-submit.spec.ts`
- Test Case 50 → `tests/test-case-050/user-profile.spec.ts`
- Test Case 500 → `tests/test-case-500/final-test.spec.ts`

---

## 🎬 Recording Tips

### When recording with Codegen:
- ✅ Perform actions slowly and clearly
- ✅ Wait for pages to load before clicking
- ✅ Copy the code immediately after recording
- ✅ Close the codegen windows when done
- ✅ Test your recorded test right away

### Common Actions Codegen Can Record:
- Clicking buttons
- Filling text fields
- Selecting dropdowns
- Checking checkboxes
- Navigating between pages
- Hovering over elements
- Uploading files

---

## 🔄 Push to GitHub for CI/CD

Once you have several test cases ready:

1. **Initialize Git** (if not done):
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit:**
   ```bash
   git commit -m "Added automated test cases"
   ```

4. **Add your GitHub repository:**
   ```bash
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   ```

5. **Push:**
   ```bash
   git push -u origin main
   ```

Now your tests will run automatically on GitHub whenever you push changes!

---

## ⚡ Daily Workflow

### Every time you want to add/run tests:

1. **Open Terminal in Automation folder**
2. **To add a new test:**
   - Run: `npm run codegen https://your-url.com`
   - Record your actions
   - Copy the code
   - Create new test file in `tests/test-case-XXX/`
   - Paste code using the template
   - Save

3. **To run all tests:**
   ```bash
   npm test
   ```

4. **To view report:**
   ```bash
   npm run report
   ```

5. **To push to GitHub:**
   ```bash
   git add .
   git commit -m "Added TC-XXX to TC-YYY"
   git push
   ```

---

## 🆘 Problems? Solutions Here!

| Problem | Solution |
|---------|----------|
| Command not found | Make sure Node.js is installed. Close and reopen Terminal |
| Browser doesn't open | Run `npx playwright install` again |
| Test fails | Run with `npm run test:headed` to see what's happening |
| Can't find element | The website might have changed. Re-record the test |
| Git push fails | Make sure you've set up your GitHub repository correctly |

---

## 📞 Remember:
- **You don't need to write code** - Codegen does it for you!
- **Each test = One folder** - Keep it organized
- **Run tests often** - Make sure they work
- **Use the template** - Always start with the template format
- **Name clearly** - Use descriptive names for your test files

**You're all set! Start recording your test cases! 🎉**
