var currentRevision = '1';

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

var formulas = {};
var worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
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
        { name: 'contract_material_total', type: 'number', mask: '#,##0', shiftFormula: true },
        // { name: 'contract_material_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'contract_labor_unit', type: 'number', mask: '#,##0' },
        { name: 'contract_labor_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'contract_equipment_unit', type: 'number', mask: '#,##0' },
        { name: 'contract_equipment_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'contract_total_unit', type: 'number', mask: '#,##0', readonly: true },
        { name: 'contract_total_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'plan_quantity', type: 'number', mask: '#,##0' },
        { name: 'plan_material_unit', type: 'number', mask: '#,##0' },
        { name: 'plan_material_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'plan_labor_unit', type: 'number', mask: '#,##0' },
        { name: 'plan_labor_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'plan_equipment_unit', type: 'number', mask: '#,##0' },
        { name: 'plan_equipment_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'plan_total_unit', type: 'number', mask: '#,##0', readonly: true },
        { name: 'plan_total_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'execution_quantity', type: 'number', mask: '#,##0' },
        { name: 'execution_material_unit', type: 'number', mask: '#,##0' },
        { name: 'execution_material_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'execution_labor_unit', type: 'number', mask: '#,##0' },
        { name: 'execution_labor_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'execution_equipment_unit', type: 'number', mask: '#,##0' },
        { name: 'execution_equipment_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'execution_total_unit', type: 'number', mask: '#,##0', readonly: true },
        { name: 'execution_total_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'adjustment_quantity', type: 'number', mask: '#,##0' },
        { name: 'adjustment_material_unit', type: 'number', mask: '#,##0' },
        { name: 'adjustment_material_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'adjustment_labor_unit', type: 'number', mask: '#,##0' },
        { name: 'adjustment_labor_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'adjustment_equipment_unit', type: 'number', mask: '#,##0' },
        { name: 'adjustment_equipment_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'adjustment_total_unit', type: 'number', mask: '#,##0', readonly: true },
        { name: 'adjustment_total_total', type: 'number', mask: '#,##0', readonly: true },
        { name: 'remark' },
      ],
    },
  ],
});

console.log(worksheets);
console.log(worksheets[0]);

worksheets[0].setData(data);

data.forEach((item, index) => {
  if (item.data.category === '소계' || item.data.category === '합계') {
    worksheets[0].setMerge(`A${index + 1}`, 4, 1);
    columns.forEach(col => {
      worksheets[0].setReadOnly(`${col}${index + 1}`, true);
    });
  }

  if (item.data.revision_cnt != currentRevision) {
    columns.forEach(col => {
      worksheets[0].setReadOnly(`${col}${index + 1}`, true);
    });
  }
});

function add() {}

function change() {
  worksheets[0].getData().forEach((item, index) => {
    columns.forEach(col => {
      worksheets[0].setReadOnly(`${col}${index + 1}`, false);
    });
  });

  currentRevision = 2;

  var chk = 1;
  var step = 4;
  worksheets[0].getData().forEach((item, index) => {
    if (item.revision_cnt === 1) {
      worksheets[0].insertRow(1, index + chk, true);
      columns.forEach(col => {
        worksheets[0].setReadOnly(`${col}${index + chk + 1}`, false);
      });
      if (item.category === '소계' || item.category === '합계')
        worksheets[0].setValue(`A${index + chk + 1}`, item.category);
      worksheets[0].setValue(`B${index + chk + 1}`, item.item);
      worksheets[0].setValue(`C${index + chk + 1}`, item.specification);
      worksheets[0].setValue(`D${index + chk + 1}`, item.unit);
      worksheets[0].setValue(`E${index + chk + 1}`, `${currentRevision}차변경`);
      worksheets[0].setValue(`F${index + chk + 1}`, item.contract_quantity);
      worksheets[0].setValue(`G${index + chk + 1}`, item.contract_material_unit);
      if (item.category === '소계' || item.category === '합계') {
        worksheets[0].setValue(
          `H${index + chk + 1}`,
          `=SUMIF(E${step}:E${index + chk + 1 - item.revision_cnt}, ${currentRevision}차변경, H${step}:H${
            index + chk + 1 - item.revision_cnt
          })`
        );
        step = index + chk + 2;
      } else {
        worksheets[0].setValue(`H${index + chk + 1}`, `=F${index + chk + 1}*G${index + chk + 1}`);
      }
      chk++;
    }
  });

  worksheets[0].getData().forEach((item, index) => {
    if (item.category === '소계' || item.category === '합계') {
      worksheets[0].setMerge(`A${index + 1}`, 4, 1);
      // columns.forEach(col => {
      //   worksheets[0].setReadOnly(`${col}${index + 1}`, true);
      // });
    }

    //   if (item.revision != currentRevision) {
    //     columns.forEach(col => {
    //       worksheets[0].setReadOnly(`${col}${index + 1}`, true);
    //     });
    //   }
  });
}
