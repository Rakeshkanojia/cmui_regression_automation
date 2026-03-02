import { test, expect } from '@playwright/test';

// Test Case ID: TC-007
// Test Case Name: Employee Location Management - Location Status Toggle
// Description: This test verifies offline/online toggle with different hour configurations
// Prerequisites: Valid user credentials in .env file

test('TC-007: Employee Location Management - Location Status Toggle', async ({ page }) => {
  
  // Step 1: Login to the application
  await page.goto(process.env.BASE_URL || 'https://staging.itsacheckmate.com/');
  await page.waitForLoadState('domcontentloaded');
  
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.USER_EMAIL!);
  
  // Fill password using correct selector
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.click();
  await passwordInput.type(process.env.USER_PASSWORD!, { delay: 100 });
  
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Wait for login to complete
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Step 2: Filter to specific location and test status toggle
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location IDs' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).fill(process.env.TEST_LOCATION_ID || '213554');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Toggle offline - use click instead of uncheck
  await page.locator('[id="213554-toggle-offline"]').click();
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'After hours 1 hour(s)' }).check();
  await page.getByRole('combobox', { name: '1' }).click();
  await page.getByRole('option', { name: '2' }).click();
  await page.getByRole('button', { name: 'select merge strategy' }).click();
  await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').click();
  await page.getByRole('radio', { name: 'After hours 1 hour(s)' }).check();
  await page.getByRole('button', { name: 'select merge strategy' }).click();
  await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').click();
  await page.getByRole('radio', { name: 'At the start of next open day' }).check();
  await page.getByRole('button', { name: 'select merge strategy' }).click();
  await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').click();
  await page.getByRole('combobox', { name: 'Time 08:00 AM' }).click();
  await page.getByRole('option', { name: '09:00 AM' }).click();
  await page.getByRole('button', { name: 'select merge strategy' }).click();
  await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  // Toggle back online - use click instead of check
  await page.locator('[id="213554-toggle-offline"]').click();
  await page.waitForTimeout(1000);
});