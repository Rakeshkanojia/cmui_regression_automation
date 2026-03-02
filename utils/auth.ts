import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  await page.goto(process.env.BASE_URL || 'https://staging.itsacheckmate.com/');
  await page.waitForLoadState('networkidle');
  
  // Fill email
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
  
  // Fill password - use input[type=password] selector instead of textbox role
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('');
  await page.locator('input[type="password"]').pressSequentially(password, { delay: 50 });
  
  // Wait to ensure password is fully entered
  await page.waitForTimeout(500);
  
  // Click sign in button
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Wait for navigation after login
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}
