/**
 * QUICK START: Excel Utility Usage
 * 
 * Import:
 *   const ExcelUtils = require('../utils/excelUtils');
 *
 * Usage Examples:
 */

// 1. READ SINGLE SHEET
const users = ExcelUtils.readExcelFile('./testdata/logindata.xlsx');
// Returns array of objects: [{ username: 'user1', password: 'pass1' }, ...]

// 2. READ SPECIFIC SHEET BY NAME
const adminUsers = ExcelUtils.readExcelFile('./testdata/testdata.xlsx', 'AdminAccounts');

// 3. READ SPECIFIC RANGE
const firstFiveRows = ExcelUtils.readExcelRange('./testdata/testdata.xlsx', 'Sheet1', 'A1:D5');

// 4. READ ALL SHEETS AT ONCE
const allData = ExcelUtils.readEntireWorkbook('./testdata/testdata.xlsx');
// Returns: { 'Sheet1': [...], 'Credentials': [...] }

// 5. GET SHEET NAMES
const sheetNames = ExcelUtils.getSheetNames('./testdata/testdata.xlsx');
// Returns: ['Sheet1', 'Credentials', 'TestData']

// 6. GET ROW COUNT
const rowCount = ExcelUtils.getRowCount('./testdata/testdata.xlsx', 'Sheet1');
// Returns: 25

/**
 * COMPLETE TEST EXAMPLE
 */

const { test, expect } = require('@playwright/test');
const ExcelUtils = require('../utils/excelUtils');
const path = require('path');

test('Data-Driven Login Test', async ({ page }) => {
  const testDataFile = path.join(__dirname, '../testdata/logindata.xlsx');
  const loginData = ExcelUtils.readExcelFile(testDataFile, 'Credentials');
  
  const baseURL = 'https://www.uat.qatarinsurance.com/Online/Welcome.do';
  
  for (let user of loginData) {
    // Navigate
    await page.goto(baseURL);
    
    // Fill login form (adjust selectors for your app)
    await page.fill('#username', user.username);
    await page.fill('#password', user.password);
    
    // Submit
    await page.click('button[type="submit"]');
    
    // Verify
    expect(page.url()).not.toContain('Welcome.do');
    console.log(`✓ Logged in successfully with: ${user.username}`);
  }
});

/**
 * EXCEL FILE SETUP:
 * 
 * Create testdata/logindata.xlsx with sheet "Credentials":
 * 
 * Column Headers (Row 1):  username  |  password
 * Row 2:                   user1     |  pass123
 * Row 3:                   user2     |  pass456
 * Row 4:                   admin     |  admin@123
 */
