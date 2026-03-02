import { test, expect } from '@playwright/test';

// Test Case ID: TC-002
// Test Case Name: Employee Location Management - Tags and Collections
// Description: This test verifies tag and collection creation, editing, copying, and deletion
// Prerequisites: Valid user credentials in .env file

test('TC-002: Employee Location Management - Tags and Collections', async ({ page }) => {
  
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
  
  // Step 2: Navigate to Location Management and open Tags modal
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.waitForTimeout(2000);
  await page.locator('#pendo-open-location-tags-modal').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Create Custom Location Tags' }).click();
  await page.getByRole('textbox', { name: 'Location Tag Name *' }).click();
  await page.getByRole('textbox', { name: 'Location Tag Name *' }).fill('Test Custom');
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI Menu - Please Do Not Assign!] Garden Catering' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI Menu - Please Do Not Assign!] Arby\'s Brink POS' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI Menu - Please Do Not Assign!] Garden Catering' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI Menu - Please Do Not Assign!] Arby\'s Brink POS' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test custom');
  await page.getByRole('button', { name: 'Edit Tag' }).click();
  await page.getByRole('tab', { name: 'Assigned' }).click();
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI Menu - Please Do Not Assign!] Garden Catering' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Unassign' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test custom');
  await page.getByRole('button', { name: 'Copy Tag' }).click();
  await page.getByRole('tab', { name: 'Assigned' }).click();
  await page.getByRole('tab', { name: 'Available' }).click();
  await page.getByRole('row', { name: 'Abundant Industries [No CMUI' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test custom');
  await page.getByRole('button', { name: 'Delete Tag' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete Tag' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').press('ArrowRight');
  await page.getByPlaceholder('Search').fill('');
  await page.getByRole('tab', { name: 'Collections' }).click();
  await page.getByRole('button', { name: 'Create Custom Tag Collection' }).click();
  await page.getByRole('textbox', { name: 'Tag Collection Name *' }).click();
  await page.getByRole('textbox', { name: 'Tag Collection Name *' }).fill('test collection');
  await page.getByRole('combobox', { name: 'Tags' }).click();
  await page.getByRole('option', { name: 'Alex Shared Tag' }).click();
  await page.getByRole('option', { name: 'Friedlander - Jerry & Strompf' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test collection');
  await page.getByRole('button', { name: 'Edit Collection' }).click();
  await page.getByRole('combobox', { name: 'Tags' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test collection');
  await page.getByRole('button', { name: 'Copy Collection' }).click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test collection');
  await page.getByRole('button', { name: 'Delete Collection' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete Collection' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'close' }).click();
});