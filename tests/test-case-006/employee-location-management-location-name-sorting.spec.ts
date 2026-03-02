import { test, expect } from '@playwright/test';

// Test Case ID: TC-006
// Test Case Name: Employee Location Management - Location Name Sorting
// Description: This test verifies location name sorting functionality (ascending/descending)
// Prerequisites: Valid user credentials in .env file

test('TC-006: Employee Location Management - Location Name Sorting', async ({ page }) => {
  
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
  
  // Step 2: Test location name sorting
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  
  // Click to sort ascending
  await page.getByRole('button', { name: 'Location Name' }).click();
  await page.waitForTimeout(1000);
  
  // Click to sort descending
  await page.getByRole('button', { name: 'Location Name sorted ascending' }).click();
  await page.waitForTimeout(1000);
  
  // Click to clear sort
  await page.getByRole('button', { name: 'Location Name sorted' }).click();
  await page.waitForTimeout(1000);
  
  // Click to sort ascending again
  await page.getByRole('button', { name: 'Location Name sorted ascending' }).click();
  await page.waitForTimeout(1000);
  
  // Click to sort descending again
  await page.getByRole('button', { name: 'Location Name sorted' }).click();
  await page.waitForTimeout(1000);
});