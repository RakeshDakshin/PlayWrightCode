const {test,expect} = require('@playwright/test');

async function logindetails(page,username,password){
    await page.goto('http://adactinhotelapp.com');
    await page.locator('//input[@id="username"]').fill('rakeshkdr');
    await page.locator('//input[@id="password"]').fill('KDR@123');
    await page.getByRole('button', { name: 'Login' }).click();
}

async function hoteldetails(page){
  await page.locator('//select[@id="location"]').selectOption('Adelaide');
  await page.selectOption('select#hotels', 'Hotel Sunshine');
  await page.selectOption('select#room_type', 'Deluxe');
  await page.locator('#room_nos').selectOption('3');
}

test('aviation', async ({page})=>{
    
    await logindetails(page, 'rakeshkdr', 'KDR@123');
    const pagetitle= await page.title();
    console.log(pagetitle);
    await expect(page).toHaveTitle(/Adactin/);
    await page.waitForTimeout(2000);
    await hoteldetails(page);
    await page.locator('#datepick_in').fill('20/06/2024'); 
    await page.locator('#datepick_out').fill('25/06/2024');
    await page.locator('#adult_room').selectOption({ value: '2' });
    await page.locator('#child_room').selectOption({ value: '1' });
    await page.getByRole('button',{name:'Search'}).click();
    await page.getByRole('radio', {name:'radiobutton_1'}).check();
    await expect(page.getByRole('radio', {name:'radiobutton_1'})).toBeChecked();
    await page.getByRole('button', { name: 'Continue' }).click();
} 
)