//const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

class ExcelUtils {
  /**
   * Read Excel file and return data
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Sheet name to read (default: first sheet)
   * @returns {Array} Array of objects containing row data
   */
  static readExcelFile(filePath, sheetName = null) {
    try {
      // Validate file exists
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Read workbook
      const workbook = XLSX.readFile(filePath);

      // Get sheet name
      const sheet = sheetName || workbook.SheetNames[0];
      
      if (!workbook.SheetNames.includes(sheet)) {
        throw new Error(`Sheet '${sheet}' not found. Available sheets: ${workbook.SheetNames.join(', ')}`);
      }

      // Convert sheet to JSON
      const worksheet = workbook.Sheets[sheet];
      const data = XLSX.utils.sheet_to_json(worksheet);

      console.log(`✓ Successfully read ${data.length} rows from sheet: ${sheet}`);
      return data;
    } catch (error) {
      console.error(`✗ Error reading Excel file: ${error.message}`);
      throw error;
    }
  }

  /**
   * Read specific range from Excel file
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Sheet name
   * @param {string} range - Range (e.g., 'A1:C10')
   * @returns {Array} Array of objects for the range
   */
  static readExcelRange(filePath, sheetName, range) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { range });

      console.log(`✓ Successfully read range ${range} from sheet: ${sheetName}`);
      return data;
    } catch (error) {
      console.error(`✗ Error reading Excel range: ${error.message}`);
      throw error;
    }
  }

  /**
   * Read entire workbook (all sheets)
   * @param {string} filePath - Path to the Excel file
   * @returns {Object} Object with sheet names as keys and data arrays as values
   */
  static readEntireWorkbook(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = XLSX.readFile(filePath);
      const result = {};

      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        result[sheetName] = XLSX.utils.sheet_to_json(worksheet);
      });

      console.log(`✓ Successfully read entire workbook with ${workbook.SheetNames.length} sheets`);
      return result;
    } catch (error) {
      console.error(`✗ Error reading workbook: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all sheet names from Excel file
   * @param {string} filePath - Path to the Excel file
   * @returns {Array} Array of sheet names
   */
  static getSheetNames(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = XLSX.readFile(filePath);
      return workbook.SheetNames;
    } catch (error) {
      console.error(`✗ Error getting sheet names: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get row count from a sheet
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Sheet name
   * @returns {number} Number of rows
   */
  static getRowCount(filePath, sheetName) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      
      return data.length;
    } catch (error) {
      console.error(`✗ Error getting row count: ${error.message}`);
      throw error;
    }
  }

  /**
   * Read Excel file with headers and return raw data
   * @param {string} filePath - Path to the Excel file
   * @param {string} sheetName - Sheet name
   * @returns {Object} Workbook object
   */
  static readExcelRaw(filePath, sheetName = null) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = XLSX.readFile(filePath);
      const sheet = sheetName || workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheet];

      return {
        workbook,
        worksheet,
        sheetName: sheet,
        data: XLSX.utils.sheet_to_json(worksheet)
      };
    } catch (error) {
      console.error(`✗ Error reading raw Excel: ${error.message}`);
      throw error;
    }
  }
}

module.exports = ExcelUtils;
