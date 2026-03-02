import { test, expect } from '@playwright/test';

// Test Case ID: TC-008
// Test Case Name: Employee Location Management - Action Links
// Description: This test verifies navigation through Menu, Hours, and Orders action links
// Prerequisites: Valid user credentials in .env file

test('TC-008: Employee Location Management - Action Links', async ({ page }) => {
  
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
  
  // Step 2: Filter to specific location and test action links
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location IDs' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).fill(process.env.TEST_LOCATION_ID || '213554');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  // Test Menu link
  await page.getByRole('link', { name: 'Menu' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('listbox', { name: 'Category' }).click();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location IDs' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).fill('213554');
  await page.getByRole('button', { name: 'Apply' }).click();
  // Test Hours link
  await page.getByRole('link', { name: 'Hours' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location IDs' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).fill('213554');
  await page.getByText('CategoryCategoryOperatorOperatorKeywordKeywordClearApply').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(1000);
});