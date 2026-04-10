import {test,expect} from '@playwright/test';
import { assert } from 'node:console';
test.describe('navigation',()=>{
    test.beforeEach(async ({page})=>{
        //Go to the Starting URL before each test
        await page.goto('https://playwright.dev/');
    });
test('main navigation',async ({page})=>{
    await expect(page).toHaveURL('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);//assertion
    await page.getByRole('link',{name:'Get started'}).click();
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();
});

});
