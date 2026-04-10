const {test,expect} = require('@playwright/test');

test('practice',async ({page})=>{
    await page.goto('https://www.uat.qatarinsurance.com/Online/Welcome.do');
    //await page.getByText('Insured. The Easy Way').waitFor();
    const pagetitle= await page.title();
    console.log(pagetitle);
    //await expect(page).toHaveTitle(/QIC Insured | The Easy Way/);
    await page.getByText('Login').click();
    await page.getByRole('button', { name: 'Login' }).click();
})
   









   /* //checkbox
    const checkboxes = page.locator('input[type="checkbox"]');
    await checkboxes.nth(1).check();
    await expect(checkboxes.nth(1)).toBeChecked();
    await checkboxes.nth(1).uncheck();
    await expect(checkboxes.nth(1)).not.toBeChecked();
    await checkboxes.nth(0).check();
    await expect(checkboxes.nth(0)).toBeChecked();
    const allCheckboxes = await checkboxes.count();
    for(let i=0;i<allCheckboxes;i++){
        await checkboxes.nth(i).check();
    } 
    //static dropdown
    const dropdown = page.locator('select#dropdown-class-example');
    await dropdown.selectOption('option2');
    await expect(dropdown).toHaveValue('option2'); 
    //dynamic dropdown
    await page.fill('#autocomplete','ind');
    const options = page.locator('.ui-menu-item div');
    const optionCount = await options.count();
    for(let i=0;i<optionCount;i++){
        const optionText = await options.nth(i).textContent();
        if(optionText==='India'){
            await options.nth(i).click();
            break;
        }   
    }
    await expect(page.locator('#autocomplete')).toHaveValue('India');
    //visible invisible
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.click('#hide-textbox'); 
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.click('#show-textbox');
    await expect(page.locator('#displayed-text')).toBeVisible();
    //radio button
    const radioButtons = page.locator('input[type="radio"]');
    await radioButtons.nth(2).check();
    await expect(radioButtons.nth(2)).toBeChecked();
});*/