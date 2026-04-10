const { test, expect } = require('@playwright/test');
test('open a webpage', async ({ page }) => {
  await page.goto('https://preprod.anoudapps.com/preprod-corp/locale.do?request_locale=en&lang=en&dataSource=001&usertype=Employee&loginModule=002&appModule=02%27');
  await expect(page).toHaveTitle('Welcome to Anoud - GI');
  const title = await page.title();
  console.log('Page title:', title);
  await page.getByPlaceholder('Username').fill('salman');
  await page.getByPlaceholder('Password').fill('salman');
  await page.getByText('Sign in').click();
  await page.waitForEvent('10000');
  await expect(page.getByText('Quotation Enquiry Log', { exact: false })).toBeVisible();
});