# QA Automation Framework - Playwright TypeScript

A simple and organized automation framework for managing 300-500 test cases using Playwright and TypeScript.

## 📁 Folder Structure

```
Automation/
├── tests/                      # All test cases go here
│   ├── test-case-001/         # Folder for Test Case 1
│   │   └── login.spec.ts      # Test script for TC-001
│   ├── test-case-002/         # Folder for Test Case 2
│   │   └── navigation.spec.ts # Test script for TC-002
│   ├── test-case-003/         # Folder for Test Case 3
│   │   └── form-submission.spec.ts
│   └── ...                    # Continue adding folders for TC-004 to TC-500
├── .github/workflows/         # CI/CD configuration
├── test-results/              # Test reports (auto-generated)
├── package.json               # Project dependencies
├── playwright.config.ts       # Playwright configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Step 1: Install Node.js
1. Download Node.js from: https://nodejs.org/ (LTS version)
2. Install it on your computer
3. Verify installation: Open terminal and type:
   ```bash
   node --version
   ```

### Step 2: Install Project Dependencies
1. Open terminal in this folder (`Automation`)
2. Run this command:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🎬 How to Record Test Cases (Using Codegen)

### Recording a New Test Case:

1. **Open terminal in the Automation folder**

2. **Start the Playwright Codegen tool:**
   ```bash
   npm run codegen
   ```
   OR with a specific URL:
   ```bash
   npm run codegen https://your-app-url.com
   ```

3. **Record your test:**
   - A browser window and a code generator window will open
   - Perform your test steps in the browser (click, type, navigate)
   - Playwright will automatically generate the code in the code generator window
   - The code will appear in real-time as you interact with the page

4. **Copy the generated code:**
   - Once you finish recording, copy all the code from the code generator window

5. **Create a new test case folder:**
   - Example: Create folder `tests/test-case-004/`
   - Create file: `tests/test-case-004/your-test-name.spec.ts`

6. **Paste and format the code:**
   ```typescript
   import { test, expect } from '@playwright/test';

   // Test Case ID: TC-004
   // Test Case Name: Your Test Name Here
   // Description: What this test does

   test('TC-004: Your Test Name', async ({ page }) => {
     // PASTE YOUR RECORDED CODE HERE
   });
   ```

7. **Save the file**

## ▶️ Running Tests

### Run All Tests:
```bash
npm test
```

### Run Tests with Browser Visible (Headed Mode):
```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive):
```bash
npm run test:ui
```

### Run a Specific Test Case:
```bash
npx playwright test tests/test-case-001
```

### Run Tests by Name Pattern:
```bash
npx playwright test --grep "login"
```

### Debug a Test:
```bash
npm run test:debug
```

## 📊 View Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

The report will open in your browser showing:
- ✅ Passed tests
- ❌ Failed tests
- 📸 Screenshots (for failures)
- 🎥 Videos (for failures)
- ⏱️ Execution time

## 📝 Naming Convention for Test Cases

Follow this pattern to keep tests organized:

1. **Folder Name:** `test-case-XXX` (where XXX is the test case number)
2. **File Name:** `descriptive-name.spec.ts`
3. **Test Name:** `TC-XXX: Descriptive Test Name`

Example:
```
tests/test-case-045/
└── user-registration.spec.ts
```

Inside the file:
```typescript
test('TC-045: User Registration with Valid Data', async ({ page }) => {
  // Your test steps here
});
```

## 🔄 CI/CD Integration (GitHub Actions)

This framework is ready for CI/CD:

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial automation framework"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Automatic Test Execution:**
   - Tests run automatically on every push to main/master/develop branches
   - Tests run on every pull request
   - You can also trigger tests manually from GitHub Actions tab

3. **View Results:**
   - Go to your GitHub repository
   - Click on "Actions" tab
   - Click on any workflow run to see results
   - Download test reports from the artifacts section

## 📋 Test Case Template

When creating a new test, use this template:

```typescript
import { test, expect } from '@playwright/test';

// Test Case ID: TC-XXX
// Test Case Name: [Your Test Name]
// Description: [What this test validates]
// Prerequisites: [Any setup required]
// Test Data: [Data used in test]

test('TC-XXX: [Test Name]', async ({ page }) => {
  // Step 1: [Description]
  await page.goto('URL');
  
  // Step 2: [Description]
  await page.click('selector');
  
  // Step 3: [Description]
  await page.fill('input', 'value');
  
  // Step 4: Verify [what you're checking]
  await expect(page.locator('selector')).toBeVisible();
});
```

## 🛠️ Useful Commands Cheat Sheet

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm test` | Run all tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Run tests in interactive UI mode |
| `npm run codegen` | Start recording a new test |
| `npm run report` | View test report |
| `npm run test:debug` | Debug a test step-by-step |
| `npx playwright test tests/test-case-001` | Run specific test folder |

## 🎯 Tips for Success

1. **One Test = One Folder:** Keep each test case in its own folder
2. **Use Descriptive Names:** Name your test files clearly (e.g., `login-with-valid-credentials.spec.ts`)
3. **Add Comments:** Describe each step in your test
4. **Run Tests Regularly:** Run tests after recording to ensure they work
5. **Check Reports:** Always review the HTML report after test runs
6. **Use Codegen:** Don't write code manually - use `npm run codegen` to record
7. **Start Small:** Begin with 5-10 test cases, then gradually add more

## 🆘 Troubleshooting

### Tests Failing?
- Check if the URL is correct in your test
- Verify the selectors (element IDs, classes) match your application
- Run the test in headed mode to see what's happening: `npm run test:headed`

### Can't Record Tests?
- Make sure you've run `npm install` and `npx playwright install`
- Check if the application URL is accessible

### CI/CD Not Working?
- Ensure the `.github/workflows/playwright.yml` file is pushed to GitHub
- Check GitHub Actions tab for error messages
- Verify your repository has Actions enabled (Settings → Actions)

## 📞 Need Help?

- Playwright Documentation: https://playwright.dev/
- Playwright Codegen Guide: https://playwright.dev/docs/codegen
- Playwright Best Practices: https://playwright.dev/docs/best-practices

---

**Ready to Start?** Follow the "Getting Started" section above! 🚀
