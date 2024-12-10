var worksheets;
var worksheet;
var currentRevisionCnt = 0;
var currentRevision = currentRevisionCnt == 0 ? '최초' : `${currentRevisionCnt}차변경`;
var rating = 0.85;

const path = 'http://localhost:8080/api/';
async function fetchData() {
  try {
    const response = await fetch(`${path}selectInitData`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();

    currentRevisionCnt = jsonData.currentRevisionCnt;
    // currentRevisionCnt = 1;
    currentRevision = currentRevisionCnt == 0 ? '최초' : `${currentRevisionCnt}차변경`;
    data.push(...jsonData.data);
    sheet(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

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
        minDimensions: [42, 0],
        mergeCells: mergeCells,
        cells: cells,
        columns: [
          { name: 'category', width: '130px', readonly: true },
          { name: 'item', width: '250px' },
          { name: 'specification', width: '220px' },
          { name: 'unit', width: '60px' },
          { name: 'revision', width: '65px', readonly: true },
          { name: 'contract_quantity', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'contract_material_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'contract_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_material_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'contract_labor_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'contract_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_labor_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'contract_equipment_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'contract_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'contract_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_total_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'contract_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'contract_total_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_quantity', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_quantity', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'plan_material_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_material_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'plan_labor_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_labor_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'plan_equipment_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_total_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'plan_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'plan_total_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_quantity', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_quantity', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'execution_material_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_material_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'execution_labor_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_labor_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'execution_equipment_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_total_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'execution_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'execution_total_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'adjustment_quantity', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_material_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_material_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_material_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_material_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_labor_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_labor_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_labor_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_labor_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_equipment_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_equipment_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_equipment_total', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_total_unit', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_total_unit', type: 'number', mask: '#,##0', shiftFormula: true },
          // { name: 'adjustment_total_total', type: 'number', mask: '#,##0', shiftFormula: true, readonly: true },
          { name: 'adjustment_total_total', type: 'number', mask: '#,##0', shiftFormula: true },
          { name: 'remark' },
        ],
      },
    ],
  });

  worksheet = worksheets[0];

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
          worksheet.setReadOnly(`${col}${index + 1}`, false);
        } else {
          // worksheet.setReadOnly(`${col}${index + 1}`, true);
        }
      });
    }

    if (
      item.category === '소계' ||
      item.category === '합계' ||
      item.category === '직접비소계' ||
      item.category === '간접비소계' ||
      item.category === '부가가치세' ||
      item.category === '세금' ||
      item.category === '총합계'
    ) {
      worksheet.setMerge(`A${index + 1}`, 4, 1);
      columns.forEach(col => {
        // worksheet.setReadOnly(`${col}${index + 1}`, true);
      });
    }

    if (item.revision != `${currentRevision}`) {
      columns.forEach(col => {
        // worksheet.setReadOnly(`${col}${index + 1}`, true);
      });
    }
  });
}

// 공종 추가
function add() {
  var category = '공통가설공사';
  worksheet = worksheets[0];

  worksheet.insertRow(4 * (currentRevisionCnt + 1), 3, true);
  worksheet.setMerge(`A4`, 1, 4 * (currentRevisionCnt + 1));
  setCellData('readonlyBasic', 'A', '4', category);

  for (var i = 0; i < 3; i++) {
    worksheet.setMerge(`B${4 + i * (currentRevisionCnt + 1)}`, 1, currentRevisionCnt + 1);
    worksheet.setMerge(`C${4 + i * (currentRevisionCnt + 1)}`, 1, currentRevisionCnt + 1);
    worksheet.setMerge(`D${4 + i * (currentRevisionCnt + 1)}`, 1, currentRevisionCnt + 1);
  }

  worksheet.setMerge(`B${7 + 3 * currentRevisionCnt}`, 3, 1 * (currentRevisionCnt + 1));
  setCellData('readonlyBasic', 'B', 7 + 3 * currentRevisionCnt, '소계');

  // 변경 차수
  for (var i = 4; i < 8 + 4 * currentRevisionCnt; i += currentRevisionCnt + 1) {
    for (var j = 0; j <= currentRevisionCnt; j++) {
      setCellData('readonlyBasic', 'E', `${i + j}`, j == 0 ? '최초' : `${j}차변경`);
    }
  }

  // 실행예정 > 단가
  for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
    setCellData('basic', 'P', j, `=G${j}*${rating}`);
    setCellData('basic', 'R', j, `=I${j}*${rating}`);
    setCellData('basic', 'T', j, `=K${j}*${rating}`);
  }

  // 정산내역
  for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
    setCellData('basic', 'AG', j, `=X${j}`);
    setCellData('readonlyBasic', 'AH', j, `=Y${j}`);
    setCellData('readonlyBasic', 'AJ', j, `=AA${j}`);
    setCellData('readonlyBasic', 'AL', j, `=AC${j}`);
  }

  // 금액
  for (var i = 0; i < columns_total.length; i++) {
    for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
      setCellData('mul', columns_total[i], j, '', ...columns_total_col[i]);
    }
  }

  // 합계 > 단가
  for (var i = 0; i < columns_total_unit.length; i++) {
    for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
      setCellData('sum', columns_total_unit[i], j, '', ...columns_total_unit_col[i]);
    }
  }

  // 합계 > 금액
  for (var i = 0; i < columns_total_total.length; i++) {
    for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
      setCellData('sum', columns_total_total[i], j, '', ...columns_total_total_col[i], '', '');
    }
  }

  // 수량
  for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
    setCellData('equal', 'O', j, '', 'F');
  }
  for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
    setCellData('equal', 'X', j, '', 'O');
  }
  for (var j = 4; j < 7 + 3 * currentRevisionCnt; j++) {
    setCellData('equal', 'AG', j, '', 'X');
    worksheet.setReadOnly(`AG${j}`, false);
  }

  // 소계
  for (var j = 0; j <= currentRevisionCnt; j++) {
    for (var i = 5; i < columns.length - 1; i++) {
      setCellData(
        'subTotal',
        columns[i],
        7 + 3 * currentRevisionCnt + j,
        '',
        '',
        '',
        '',
        '4',
        j == 0 ? '최초' : `${j}차변경`
      );
    }
    worksheet.setReadOnly(`AP${7 + 3 * currentRevisionCnt + j}`, true);
  }

  for (var j = 0; j < currentRevisionCnt; j++) {
    columns.splice(5).forEach(col => {
      for (var i = 0; i < 3; i++) {
        worksheet.setReadOnly(`${col}${4 + i * (currentRevisionCnt + 1)}`, true);
      }
    });
  }
}

// 저장
function save() {
  async function fetchInsertData() {
    try {
      const response = await fetch(`${path}save`, {
        method: 'POST',
        body: JSON.stringify(worksheets[0].getData().slice(3)),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  fetchInsertData();
}

function setCellData(type, row, col, val, num1, num2, num3, step, rev) {
  worksheet.setReadOnly(`${row}${col}`, false);

  switch (type) {
    case 'equal':
      worksheet.setValue(`${row}${col}`, `=${num1}${col}`);
      break;
    case 'mul':
      worksheet.setValue(`${row}${col}`, `=${num1}${col}*${num2}${col}`);
      break;
    case 'sum':
      worksheet.setValue(`${row}${col}`, `=${num1}${col}+${num2}${col}+${num3}${col}`);
      break;
    case 'subTotal':
      worksheet.setValue(`${row}${col}`, `=SUMIF(E${step}:E${col}, "${rev}", ${row}${step}:${row}${col})`);
      break;
    case 'total':
      worksheet.setValue(`${row}${col}`, `=SUMIFS(${row}4:${row}${col}, A4:A${col}, '소계', E4:E${col}, "${rev}")`);
      break;
    default:
      worksheet.setValue(`${row}${col}`, val);
  }

  if (type != 'basic' && type != 'totalSum' && type != 'total') {
    worksheet.setReadOnly(`${row}${col}`, true);
  }
}
