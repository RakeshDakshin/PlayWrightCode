const{test,expect}=require('@playwright/test');

let Username='rakeshkdr4';
let Password='KDR@123';
//let alertCount = 0;
//const alertText = dialog.message();

test('Assigment1',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    const pagetitle= await page.title();
    console.log(pagetitle);
    //await page.locator('[id="signin2"]').click();
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.locator( '//*[@id="sign-username"]').fill(Username);
    await page.getByRole('textbox',{name:'Password'}).fill(Password);
    //await page.locator('//*[@class="form-control"]').fill('testpassword');
    await page.getByRole('button',{name:'Sign up'}).click();
    //expect(alertText).toMatch(/Sign up successful|already exist/);

    page.on('dialog', async dialog => {

    alertCount++;
  if(alertCount === 1) {
    console.log('First alert message:', dialog.message());  
    expect(dialog.message()).toContain('Sign up successful');
    await dialog.accept();
  } else if(alertCount === 2) {
    console.log('Second alert message:', dialog.message());
    const alertText = dialog.message();
    expect(dialog.message()).toContain('This user already exist.');
    await dialog.accept();
  }});   
  
  expect(alertText).toMatch(/Sign up successful|already exist/);
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator( '//*[@id="loginusername"]').fill(Username);
  await page.locator('//div[@class="modal-body"]/form/div/input[@id="loginpassword"]').fill(Password);
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('button',{name:'Phones'}).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.on('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  } );
  
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button',{name:'Laptops'}).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  await page.on('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  } );

await page.getByRole('link', { name: 'Cart' }).click();
await page.getByRole('button', { name: 'Place Order' }).click();
}
);