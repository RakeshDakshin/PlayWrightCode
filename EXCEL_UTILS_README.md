# Excel Utils Setup Guide

## Overview
The `ExcelUtils` class provides utilities for reading Excel files in your Playwright tests, enabling data-driven testing.

## Installation

The `xlsx` package has been added to `package.json`. Install dependencies:

```bash
npm install
```

## File Structure

```
Playwright demo/
├── utils/
│   └── excelUtils.js          # Excel utility class
├── tests/
│   ├── alerts.spec.js
│   └── excelDataDrivenExample.spec.js
├── testdata/
│   └── logindata.xlsx         # Your test data files
└── package.json
```

## Creating Test Data Excel File

1. Create a `testdata` folder in your project root
2. Create an Excel file (e.g., `logindata.xlsx`)
3. Add data with headers in the first row:
   ```
   | username    | password  | email              |
   |-------------|-----------|-------------------|
   | user1       | pass1     | user1@example.com |
   | user2       | pass2     | user2@example.com |
   ```

## ExcelUtils Methods

### 1. **readExcelFile(filePath, sheetName)**
Reads data from a specific Excel sheet.

```javascript
const ExcelUtils = require('../utils/excelUtils');

const data = ExcelUtils.readExcelFile('./testdata/logindata.xlsx');
// Returns: [{ username: 'user1', password: 'pass1', email: 'user1@example.com' }, ...]

// Read specific sheet
const data = ExcelUtils.readExcelFile('./testdata/logindata.xlsx', 'Credentials');
```

### 2. **readExcelRange(filePath, sheetName, range)**
Reads a specific range from Excel.

```javascript
const rangeData = ExcelUtils.readExcelRange(
  './testdata/logindata.xlsx',
  'Sheet1',
  'A1:C5'
);
```

### 3. **readEntireWorkbook(filePath)**
Reads all sheets from the workbook.

```javascript
const allSheets = ExcelUtils.readEntireWorkbook('./testdata/logindata.xlsx');
// Returns: { 'Sheet1': [...], 'Credentials': [...], ... }
```

### 4. **getSheetNames(filePath)**
Gets all sheet names from workbook.

```javascript
const sheets = ExcelUtils.getSheetNames('./testdata/logindata.xlsx');
// Returns: ['Sheet1', 'Credentials', 'TestData']
```

### 5. **getRowCount(filePath, sheetName)**
Gets the number of rows in a sheet.

```javascript
const count = ExcelUtils.getRowCount('./testdata/logindata.xlsx', 'Sheet1');
// Returns: 5
```

### 6. **readExcelRaw(filePath, sheetName)**
Returns raw workbook object for advanced operations.

```javascript
const raw = ExcelUtils.readExcelRaw('./testdata/logindata.xlsx');
```

## Usage in Tests

### Basic Data-Driven Test

```javascript
const { test } = require('@playwright/test');
const ExcelUtils = require('../utils/excelUtils');

test('Login with Excel data', async ({ page }) => {
  const users = ExcelUtils.readExcelFile('./testdata/logindata.xlsx');
  
  for (let user of users) {
    await page.goto('https://www.uat.qatarinsurance.com/Online/Welcome.do');
    await page.fill('#username', user.username);
    await page.fill('#password', user.password);
    await page.click('button:has-text("Login")');
    // Add your assertions here
  }
});
```

### Using Multiple Sheets

```javascript
const allData = ExcelUtils.readEntireWorkbook('./testdata/testdata.xlsx');

test('Multi-sheet testing', async ({ page }) => {
  const loginData = allData['Credentials'];
  const userProfiles = allData['Profiles'];
  
  for (let i = 0; i < loginData.length; i++) {
    // Use corresponding data from both sheets
  }
});
```

## Error Handling

The utility includes built-in error handling:

```javascript
try {
  const data = ExcelUtils.readExcelFile('./testdata/data.xlsx');
} catch (error) {
  console.error('Error reading Excel:', error.message);
}
```

## Best Practices

1. **Organize test data**: Keep Excel files in a `testdata` folder
2. **Use constants**: Define file paths as constants
3. **Error handling**: Always wrap in try-catch blocks
4. **Clear naming**: Use descriptive sheet names (Credentials, TestData, etc.)
5. **Documentation**: Add comments explaining data structure in Excel

## Example Excel Structure

### Sheet: "Credentials"
```
username  | password | email
user1     | pass1    | user1@test.com
admin     | admin123 | admin@test.com
```

### Sheet: "FormData"
```
name      | age | country
John Doe  | 30  | USA
Jane Smith| 28  | UK
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| File not found error | Ensure Excel file path is correct relative to where test runs |
| Sheet not found | Check sheet name spelling in Excel file |
| Empty data array | Verify Excel file has data with headers in first row |
| Column data empty | Check if column names in Excel match your code |

## Next Steps

1. Create your test data Excel file in `testdata` folder
2. Update file paths in your tests
3. Run tests with: `npx playwright test`
4. View results in HTML report

For more examples, see `excelDataDrivenExample.spec.js`
