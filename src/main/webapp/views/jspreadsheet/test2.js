var worksheets;
var currentRevision = 1;

const path = 'http://localhost:8080/api/';
async function fetchData() {
  try {
    const response = await fetch(`${path}data`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();

    data.push(...jsonData);
    sheet(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

var mergeCells = {
  A1: [1, 3],
  B1: [1, 3],
  C1: [1, 3],
  D1: [1, 3],
  E1: [1, 3],
  F1: [9, 1],
  O1: [9, 1],
  X1: [9, 1],
  AG1: [9, 1],
  AP1: [1, 3],

  F2: [1, 2],
  G2: [2, 1],
  I2: [2, 1],
  K2: [2, 1],
  M2: [2, 1],

  O2: [1, 2],
  P2: [2, 1],
  R2: [2, 1],
  T2: [2, 1],
  V2: [2, 1],

  X2: [1, 2],
  Y2: [2, 1],
  AA2: [2, 1],
  AC2: [2, 1],
  AE2: [2, 1],

  AG2: [1, 2],
  AH2: [2, 1],
  AJ2: [2, 1],
  AL2: [2, 1],
  AN2: [2, 1],
};

var cells = {};

const columns = [];
const startCharCode = 'A'.charCodeAt(0);

// Single letters (A to Z)
for (let i = 0; i < 26; i++) {
  columns.push(String.fromCharCode(startCharCode + i));
}

// Double letters (AA to AP)
for (let i = 0; i < 26; i++) {
  for (let j = 0; j < 26; j++) {
    const letter = String.fromCharCode(startCharCode + i) + String.fromCharCode(startCharCode + j);
    columns.push(letter);
    if (letter === 'AP') break;
  }
  if (columns[columns.length - 1] === 'AP') break;
}

for (let row = 1; row <= 3; row++) {
  columns.forEach(col => {
    cells[`${col}${row}`] = { readonly: true };
  });
}

// jspreadsheet draw
function sheet() {
  worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
      {
        data: data,
        language: 'ko',
        freezeColumns: 4,
        freezeRows: 3,
        tableOverflow: true,
        tableWidth: '1900px',
        tableHeight: '800px',
        minDimensions: [42, 0],
        mergeCells: mergeCells,
        cells: cells,
        columns: [
          { name: 'category', width: '130px', readonly: true },
          { name: 'item', width: '250px' },
          { name: 'specification', width: '220px' },
          { name: 'unit', width: '60px' },
          { name: 'revision', width: '65px', readonly: true },
          { name: 'contract_quantity', type: 'number', mask: '#,##0' },
          { name: 'contract_material_unit', type: 'number', mask: '#,##0' },
          { name: 'contract_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_labor_unit', type: 'number', mask: '#,##0' },
          { name: 'contract_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_equipment_unit', type: 'number', mask: '#,##0' },
          { name: 'contract_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_quantity', type: 'number', mask: '#,##0', readonly: true },
          { name: 'plan_material_unit', type: 'number', mask: '#,##0' },
          { name: 'plan_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_labor_unit', type: 'number', mask: '#,##0' },
          { name: 'plan_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_equipment_unit', type: 'number', mask: '#,##0' },
          { name: 'plan_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_quantity', type: 'number', mask: '#,##0', readonly: true },
          { name: 'execution_material_unit', type: 'number', mask: '#,##0' },
          { name: 'execution_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_labor_unit', type: 'number', mask: '#,##0' },
          { name: 'execution_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_equipment_unit', type: 'number', mask: '#,##0' },
          { name: 'execution_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_quantity', type: 'number', mask: '#,##0' },
          { name: 'adjustment_material_unit', type: 'number', mask: '#,##0', readonly: true },
          { name: 'adjustment_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_labor_unit', type: 'number', mask: '#,##0', readonly: true },
          { name: 'adjustment_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_equipment_unit', type: 'number', mask: '#,##0', readonly: true },
          { name: 'adjustment_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'remark' },
        ],
      },
    ],
  });

  var temp = worksheets[0];

  data.forEach((item, index) => {
    if (item.category === '간접비') {
      columns.forEach(col => {
        if (
          (col === 'M' || col === 'V' || col === 'AE') &&
          (item.item === '작업설 부산물' ||
            item.item === '운반비' ||
            item.item === '재료시험비' ||
            item.item === '폐기물처리비')
        ) {
          temp.setReadOnly(`${col}${index + 1}`, false);
        } else {
          temp.setReadOnly(`${col}${index + 1}`, true);
        }
      });
    }

    if (item.category === '소계' || item.category === '합계') {
      temp.setMerge(`A${index + 1}`, 4, 1);
      columns.forEach(col => {
        temp.setReadOnly(`${col}${index + 1}`, true);
      });
    }

    if (item.revision != `${currentRevision}차변경`) {
      columns.forEach(col => {
        temp.setReadOnly(`${col}${index + 1}`, true);
      });
    }
  });
}

// 공종 추가
function add() {}

// 설계 변경
function change() {
  var chk = 1;
  var step = 4;
  var worksheet = worksheets[0];
  worksheet.getData().forEach((item, index) => {
    if (item.revision === `${currentRevision}차변경`) {
      worksheet.insertRow(1, index + chk, true);

      setCellData('readonlyBasic', 'A', index + chk + 1, item.category, '', '', '', '');
      setCellData('basic', 'B', index + chk + 1, item.item, '', '', '', '');
      setCellData('basic', 'C', index + chk + 1, item.specification, '', '', '', '');
      setCellData('basic', 'D', index + chk + 1, item.unit, '', '', '', '');

      setCellData('readonlyBasic', 'E', index + chk + 1, `${currentRevision + 1}차변경`, '', '', '', '');
      switch (item.category) {
        case '소계':
          setCellData('subTotal', 'F', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'G', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'H', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'I', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'J', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'K', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'L', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'M', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'N', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'O', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'P', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'Q', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'R', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'S', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'T', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'U', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'V', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'W', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'X', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'Y', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'Z', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AA', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AB', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AC', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AD', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AE', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AF', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AG', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AH', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AI', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AJ', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AK', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AL', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AM', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AN', index + chk + 1, '', '', '', '', step);
          setCellData('subTotal', 'AO', index + chk + 1, '', '', '', '', step);
          step = index + chk + 2;

          worksheet.setMerge(`A${index + chk + 1}`, 4, 1);
          columns.forEach(col => {
            worksheet.setReadOnly(`${col}${index + chk + 1}`, true);
          });
          break;
        case '합계':
          setCellData('total', 'F', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'G', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'H', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'I', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'J', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'K', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'L', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'M', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'N', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'O', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'P', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'Q', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'R', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'S', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'T', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'U', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'V', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'W', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'X', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'Y', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'Z', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AA', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AB', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AC', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AD', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AE', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AF', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AG', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AH', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AI', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AJ', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AK', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AL', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AM', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AN', index + chk + 1, '', '', '', '', '');
          setCellData('total', 'AO', index + chk + 1, '', '', '', '', '');

          worksheet.setMerge(`A${index + chk + 1}`, 4, 1);
          columns.forEach(col => {
            worksheet.setReadOnly(`${col}${index + chk + 1}`, true);
          });
          break;
        default:
          setCellData('basic', 'F', index + chk + 1, item.contract_quantity, '', '', '', '');
          setCellData('basic', 'G', index + chk + 1, item.contract_material_unit, '', '', '', '');
          setCellData('mul', 'H', index + chk + 1, '', 'F', 'G', '', '');
          setCellData('basic', 'I', index + chk + 1, item.contract_labor_unit, '', '', '', '');
          setCellData('mul', 'J', index + chk + 1, '', 'F', 'I', '', '');
          setCellData('basic', 'K', index + chk + 1, item.contract_equipment_unit, '', '', '', '');
          setCellData('mul', 'L', index + chk + 1, '', 'F', 'K', '', '');
          setCellData('sum', 'M', index + chk + 1, '', 'G', 'I', 'K', '');
          setCellData('sum', 'N', index + chk + 1, '', 'H', 'J', 'L', '');
          setCellData('readonlyBasic', 'O', index + chk + 1, item.plan_quantity, '', '', '', '');
          setCellData('basic', 'P', index + chk + 1, item.plan_material_unit, '', '', '', '');
          setCellData('mul', 'Q', index + chk + 1, '', 'O', 'P', '', '');
          setCellData('basic', 'R', index + chk + 1, item.plan_labor_unit, '', '', '', '');
          setCellData('mul', 'S', index + chk + 1, '', 'O', 'R', '', '');
          setCellData('basic', 'T', index + chk + 1, item.plan_equipment_unit, '', '', '', '');
          setCellData('mul', 'U', index + chk + 1, '', 'O', 'T', '', '');
          setCellData('sum', 'V', index + chk + 1, '', 'P', 'R', 'T', '');
          setCellData('sum', 'W', index + chk + 1, '', 'Q', 'S', 'U', '');
          setCellData('readonlyBasic', 'X', index + chk + 1, item.execution_quantity, '', '', '', '');
          setCellData('basic', 'Y', index + chk + 1, item.execution_material_unit, '', '', '', '');
          setCellData('mul', 'Z', index + chk + 1, '', 'X', 'Y', '', '');
          setCellData('basic', 'AA', index + chk + 1, item.execution_labor_unit, '', '', '', '');
          setCellData('mul', 'AB', index + chk + 1, '', 'X', 'AA', '', '');
          setCellData('basic', 'AC', index + chk + 1, item.execution_equipment_unit, '', '', '', '');
          setCellData('mul', 'AD', index + chk + 1, '', 'X', 'AC', '', '');
          setCellData('sum', 'AE', index + chk + 1, '', 'Y', 'AA', 'AC', '');
          setCellData('sum', 'AF', index + chk + 1, '', 'Z', 'AB', 'AD', '');
          setCellData('basic', 'AG', index + chk + 1, item.adjustment_quantity, '', '', '', '');
          setCellData('readonlyBasic', 'AH', index + chk + 1, item.adjustment_material_unit, '', '', '', '');
          setCellData('mul', 'AI', index + chk + 1, '', 'AG', 'AH', '', '');
          setCellData('readonlyBasic', 'AJ', index + chk + 1, item.adjustment_labor_unit, '', '', '', '');
          setCellData('mul', 'AK', index + chk + 1, '', 'AG', 'AJ', '', '');
          setCellData('readonlyBasic', 'AL', index + chk + 1, item.adjustment_equipment_unit, '', '', '', '');
          setCellData('mul', 'AM', index + chk + 1, '', 'AG', 'AL', '', '');
          setCellData('sum', 'AN', index + chk + 1, '', 'AH', 'AJ', 'AL', '');
          setCellData('sum', 'AO', index + chk + 1, '', 'AI', 'AK', 'AM', '');

          if (item.category === '간접비') {
            columns.forEach(col => {
              if (
                (col === 'M' || col === 'V' || col === 'AE') &&
                (item.item === '작업설 부산물' ||
                  item.item === '운반비' ||
                  item.item === '재료시험비' ||
                  item.item === '폐기물처리비') &&
                item.revision === `${currentRevision}차변경`
              ) {
                worksheet.setReadOnly(`${col}${index + chk + 1}`, false);
              } else {
                worksheet.setReadOnly(`${col}${index + chk + 1}`, true);
              }
            });
          }
      }

      columns.forEach(col => {
        worksheet.setReadOnly(`${col}${index + chk}`, true);
      });

      chk++;
    }
  });
  currentRevision++;
}

// 설계변경으로 인한 행 추가 데이터 셋팅
function setCellData(type, row, col, val, num1, num2, num3, step) {
  if (type != 'basic') {
    worksheets[0].setReadOnly(`${row}${col}`, false);
  }

  switch (type) {
    case 'mul':
      worksheets[0].setValue(`${row}${col}`, `=${num1}${col}*${num2}${col}`);
      break;
    case 'sum':
      worksheets[0].setValue(`${row}${col}`, `=${num1}${col}+${num2}${col}+${num3}${col}`);
      break;
    case 'subTotal':
      worksheets[0].setValue(
        `${row}${col}`,
        `=SUMIF(E${step}:E${col}, "${currentRevision + 1}차변경", ${row}${step}:${row}${col})`
      );
      break;
    case 'total':
      worksheets[0].setValue(
        `${row}${col}`,
        `=SUMIFS(${row}4:${row}${col}, A4:A${col}, '소계', E4:E${col}, "${currentRevision + 1}차변경")`
      );
      break;
    default:
      worksheets[0].setValue(`${row}${col}`, val);
  }

  if (type != 'basic' && type != 'totalSum' && type != 'total') {
    worksheets[0].setReadOnly(`${row}${col}`, true);
  }
}
