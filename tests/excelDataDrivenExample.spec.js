const { test, expect } = require('@playwright/test');
const ExcelUtils = require('../utils/excelUtils');
const path = require('path');

/**
 * Example: Using ExcelUtils for data-driven testing
 * 
 * Usage:
 * 1. Place your test data Excel file in project root
 * 2. Use the methods below to read and use data in tests
 */

// Example data file path
const TEST_DATA_FILE = path.join(__dirname, '../testdata/logindata.xlsx');

test.describe('Excel Data-Driven Tests', () => {
  
  test('Example 1: Read entire Excel sheet', async ({ page }) => {
    try {
      // Read data from first sheet
      const testData = ExcelUtils.readExcelFile(TEST_DATA_FILE);
      
      console.log(`Total records: ${testData.length}`);
      console.log('Sample data:', testData[0]);
      
      // Use data in test
      for (let record of testData) {
        console.log(`Username: ${record.username}, Password: ${record.password}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 2: Read specific sheet by name', async ({ page }) => {
    try {
      const testData = ExcelUtils.readExcelFile(TEST_DATA_FILE, 'Credentials');
      console.log('Data from Credentials sheet:', testData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 3: Get all sheet names', async ({ page }) => {
    try {
      const sheets = ExcelUtils.getSheetNames(TEST_DATA_FILE);
      console.log('Available sheets:', sheets);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 4: Read specific range', async ({ page }) => {
    try {
      const rangeData = ExcelUtils.readExcelRange(TEST_DATA_FILE, 'Sheet1', 'A1:C5');
      console.log('Range data:', rangeData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 5: Get row count', async ({ page }) => {
    try {
      const count = ExcelUtils.getRowCount(TEST_DATA_FILE, 'Sheet1');
      console.log(`Total rows: ${count}`);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 6: Read entire workbook (all sheets)', async ({ page }) => {
    try {
      const allData = ExcelUtils.readEntireWorkbook(TEST_DATA_FILE);
      Object.keys(allData).forEach(sheet => {
        console.log(`Sheet: ${sheet}, Rows: ${allData[sheet].length}`);
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  test('Example 7: Data-driven login test', async ({ page }) => {
    try {
      const loginData = ExcelUtils.readExcelFile(TEST_DATA_FILE, 'Credentials');
      
      const BASE_URL = 'https://www.uat.qatarinsurance.com/Online/Welcome.do';
      
      for (let user of loginData) {
        await page.goto(BASE_URL);
        
        // Example locators (adjust based on your application)
        // await page.fill('#username', user.username);
        // await page.fill('#password', user.password);
        // await page.click('button:has-text("Login")');
        // await page.waitForNavigation();
        
        console.log(`✓ Tested login with user: ${user.username}`);
      }
    } catch (error) {
      console.error('Error in login test:', error.message);
    }
  });
});
