# Test Case Template

Copy this template every time you create a new test case.

## File Location Pattern:
`tests/test-case-XXX/descriptive-name.spec.ts`

Example:
- `tests/test-case-001/login.spec.ts`
- `tests/test-case-050/user-registration.spec.ts`
- `tests/test-case-250/checkout-process.spec.ts`

---

## Template Code:

```typescript
import { test, expect } from '@playwright/test';

// Test Case ID: TC-XXX
// Test Case Name: [Write your test case name here]
// Description: [What does this test validate?]
// Prerequisites: [Any setup needed before running this test]
// Test Data: [What data/credentials are used]

test('TC-XXX: [Your Test Case Name]', async ({ page }) => {
  
  // PASTE YOUR CODEGEN RECORDED CODE BELOW THIS LINE
  // ============================================
  
  // Example steps (replace with your recorded code):
  
  // Step 1: Navigate to page
  await page.goto('https://your-app-url.com');
  
  // Step 2: Perform actions
  await page.click('button#submit');
  
  // Step 3: Verify results
  await expect(page.locator('.success-message')).toBeVisible();
  
  // ============================================
  // END OF RECORDED CODE
  
});
```

---

## How to Use This Template:

### Step 1: Create New Folder and File
1. Create folder: `tests/test-case-XXX/` (replace XXX with your test number)
2. Create file: `tests/test-case-XXX/your-test-name.spec.ts`

### Step 2: Copy Template
Copy the entire code template above into your new file

### Step 3: Fill in Details
- Replace `XXX` with your test case number
- Replace `[Your Test Case Name]` with actual test name
- Fill in description, prerequisites, and test data

### Step 4: Add Recorded Code
- Run `npm run codegen` to record your test
- Copy the generated code
- Paste it replacing the example steps in the template

### Step 5: Save and Test
- Save the file
- Run `npm test` to verify it works

---

## Naming Examples:

Good test names:
- `TC-001: User Login with Valid Credentials`
- `TC-002: User Login with Invalid Password`
- `TC-003: Navigate to Dashboard Page`
- `TC-004: Create New Customer Account`
- `TC-005: Edit Existing Order`
- `TC-006: Delete User Profile`
- `TC-007: Search Products by Category`

---

## Quick Checklist:

Before saving your test, verify:
- [ ] Test case number is correct (TC-XXX)
- [ ] Test name is descriptive
- [ ] Description is filled in
- [ ] Recorded code is pasted
- [ ] File is in correct folder (`tests/test-case-XXX/`)
- [ ] File name ends with `.spec.ts`
- [ ] Code is saved

---

## Example Complete Test:

```typescript
import { test, expect } from '@playwright/test';

// Test Case ID: TC-015
// Test Case Name: User Registration with Valid Data
// Description: Verifies that a new user can successfully register with valid information
// Prerequisites: None - Registration page should be accessible
// Test Data: email: test@example.com, password: Test@123

test('TC-015: User Registration with Valid Data', async ({ page }) => {
  
  // Step 1: Navigate to registration page
  await page.goto('https://myapp.com/register');
  
  // Step 2: Fill in first name
  await page.fill('#firstName', 'John');
  
  // Step 3: Fill in last name
  await page.fill('#lastName', 'Doe');
  
  // Step 4: Fill in email
  await page.fill('#email', 'test@example.com');
  
  // Step 5: Fill in password
  await page.fill('#password', 'Test@123');
  
  // Step 6: Fill in confirm password
  await page.fill('#confirmPassword', 'Test@123');
  
  // Step 7: Click register button
  await page.click('button[type="submit"]');
  
  // Step 8: Verify success message appears
  await expect(page.locator('.alert-success')).toBeVisible();
  await expect(page.locator('.alert-success')).toContainText('Registration successful');
  
  // Step 9: Verify redirect to dashboard
  await expect(page).toHaveURL(/.*dashboard/);
  
});
```

---

**Copy this template for every new test case you create!**
