const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.uat.qatarinsurance.com/Online/Welcome.do';

test.describe('Qatar Insurance Application Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    // Optional: Wait for page to be ready
    await page.waitForLoadState('domcontentloaded');
  });

  test('alerts - verify page loads successfully', async ({ page }) => {
    // Verify page URL
    expect(page.url()).toContain('qatarinsurance.com');
    
    // Verify page title or heading
    // Uncomment below once you know the expected element
    // await expect(page.locator('h1')).toBeVisible();
    
    await page.pause();
  });
});
