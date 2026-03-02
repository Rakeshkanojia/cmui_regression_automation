import { test, expect } from '@playwright/test';

// Test Case ID: TC-005
// Test Case Name: Employee Location Management - Grid View Links and Actions
// Description: This test verifies grid view toggle, offline toggle, action menus, and platform settings
// Prerequisites: Valid user credentials in .env file

test('TC-005: Employee Location Management - Grid View Links', async ({ page }) => {
  
  // Step 1: Login to the application
  await page.goto(process.env.BASE_URL || 'https://staging.itsacheckmate.com/');
  await page.waitForLoadState('domcontentloaded');
  
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.USER_EMAIL!);
  
  // Fill password using correct selector
  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.click();
  await passwordInput.clear();
  await passwordInput.pressSequentially(process.env.USER_PASSWORD!, { delay: 50 });
  
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Wait for login to complete
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Step 2: Navigate to Location Management and test grid view
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.locator('#grid-view-icon-button').click();
  await page.locator('#list-view-icon-button').click();
  await page.locator('#grid-view-icon-button').click();
  await page.waitForTimeout(1000);
  await page.locator('[id="224288-toggle-offline"]').click();
  await page.getByRole('radio', { name: 'After hours 1 hour(s)' }).check();
  await page.getByRole('button', { name: 'select merge strategy' }).click();
  await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.locator('[id="224288-toggle-offline"]').click();
  await page.locator('[id="224288-action-menu"]').click();
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.locator('#grid-view-icon-button').click();
  await page.locator('[id="224288-action-hours"]').click();
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.locator('#grid-view-icon-button').click();
  await page.locator('[id="224288-action-orders"]').click();
  await page.getByLabel('Location Management').getByRole('link').click();
  await page.getByText('Total locations: 27808Show').click();
  await page.locator('#grid-view-icon-button').click();
  await page.locator('#location-grid-item-224288').getByRole('button', { name: 'show platforms' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('checkbox').nth(2).click();
  await page.waitForTimeout(1000);
  
  // Check if radio button is available, if not skip this step
  const radioButton = page.getByRole('radio', { name: 'After hours 1 hour(s)' });
  const isVisible = await radioButton.isVisible().catch(() => false);
  
  if (isVisible) {
    await radioButton.click();
    await page.getByRole('button', { name: 'select merge strategy' }).click();
    await page.getByRole('menuitem', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).click();
  }
});