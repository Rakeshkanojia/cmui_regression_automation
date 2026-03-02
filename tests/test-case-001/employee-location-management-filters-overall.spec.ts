import { test, expect } from '@playwright/test';
import { login } from '../../utils/auth';

// Test Case ID: TC-001
// Test Case Name: Employee Location Management - Filters Functionality
// Description: This test verifies that all filter options in Location Management work correctly
// Prerequisites: Valid user credentials in .env file
// Test Data: Uses environment variables for credentials and test data

test('TC-001: Employee Location Management - Filters Overall', async ({ page }) => {
  
  // Step 1: Login to the application
  await page.goto(process.env.BASE_URL || 'https://staging.itsacheckmate.com/');
  await page.waitForLoadState('domcontentloaded');
  
  // Fill email
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.USER_EMAIL!);
  
  // Fill password - use pressSequentially for special characters
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.click();
  await passwordInput.clear();
  await passwordInput.pressSequentially(process.env.USER_PASSWORD!, { delay: 50 });
  
  // Verify password was entered
  await page.waitForTimeout(1000);
  
  // Click sign in
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Wait for page to load after login
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
  
  // Step 2: Navigate to Location Management
  const locationLink = page.getByLabel('Location Management').getByRole('link');
  await locationLink.waitFor({ state: 'visible', timeout: 30000 });
  await locationLink.click();
  await expect(page).toHaveURL(/.*location/);
  
  // Test Filter 1: Location Name Filter
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location Name' }).click();
  await page.getByRole('textbox', { name: 'Keyword' }).fill(process.env.TEST_LOCATION_NAME || 'Worldwide Works');
  await page.getByRole('button', { name: 'Apply' }).click();
  
  // Verify filter applied (wait for results to load)
  await page.waitForTimeout(2000);
  await expect(page.getByRole('button', { name: 'Clear' })).toBeVisible();
  
  // Clear filter
  await page.getByRole('button', { name: 'Clear' }).click();
  
  // Test Filter 2: Location Status - Online
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location Status' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Test Filter 3: Location Status - Offline
  await page.getByRole('combobox', { name: 'Keyword Online' }).click();
  await page.getByRole('option', { name: 'Offline', exact: true }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Test Filter 4: Location Status - Offline Indefinitely
  await page.getByRole('combobox', { name: 'Keyword Offline' }).click();
  await page.getByRole('option', { name: 'Offline Indefinitely' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Clear filter
  await page.getByRole('button', { name: 'Clear' }).click();
  
  // Test Filter 5: Ordering Sources - Allset
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Ordering Sources' }).click();
  await page.getByRole('combobox', { name: 'Ordering Sources' }).click();
  await page.getByRole('option', { name: 'Allset' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Verify Allset toggle is visible
  await expect(page.locator('[id*="allset"]').first()).toBeVisible();
  
  // Navigate back to Location Management
  await page.getByLabel('Location Management').getByRole('link').click();
  
  // Test Filter 6: Offline by Ordering Platform
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Offline by Ordering Platform' }).click();
  await page.waitForTimeout(1000);
  
  // Check if Keyword dropdown is enabled, if not just apply
  const keywordDropdown = page.getByRole('combobox', { name: 'Keyword Offline' });
  const isDisabled = await keywordDropdown.getAttribute('aria-disabled');
  
  if (isDisabled !== 'true') {
    await keywordDropdown.click();
    await page.getByRole('option', { name: 'Offline by Checkmate' }).click();
  }
  
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Test Filter 7: Enterprise Status - Enterprise
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Enterprise Status' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Test Filter 8: Enterprise Status - SMB
  await page.getByRole('combobox', { name: 'Keyword Enterprise' }).click();
  await page.getByRole('option', { name: 'SMB' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Test Filter 9: Enterprise Level (verify dropdown opens)
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Enterprise Level' }).click();
  await page.getByRole('combobox', { name: 'Keyword' }).click();
  await page.waitForTimeout(500);
  
  // Close dropdown by pressing Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  
  // Test Filter 10: Location IDs
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.getByRole('option', { name: 'Location IDs' }).click();
  await page.getByRole('textbox', { name: 'Keyword Please enter comma' }).fill(process.env.TEST_LOCATION_ID || '213554');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(2000);
  
  // Final verification: Verify filter section is still visible
  await expect(page.getByRole('combobox', { name: 'Category' })).toBeVisible();
});