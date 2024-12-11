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
    currentRevisionCnt = 1;
    currentRevisionCnt = 2;
    // currentRevisionCnt = 3;
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
    contextMenu: function (o, x, y, e, i, section) {
      console.log(section);
      // if (
      // y < 3
      //  ||  o.getValue(`A${y + 1}`) === '간접비' ||
      // o.getValue(`A${y + 1}`) === '소계' ||
      // o.getValue(`A${y + 1}`) === '직접비소계' ||
      // o.getValue(`A${y + 1}`) === '간접비소계' ||
      // o.getValue(`A${y + 1}`) === '합계' ||
      // o.getValue(`A${y + 1}`) === '부가가치세' ||
      // o.getValue(`A${y + 1}`) === '세금' ||
      // o.getValue(`A${y + 1}`) === '총합계'
      // )
      //   return [];

      let items = [];

      if (section == 'select-all') {
        items.push({
          title: jSuites.translate('전체 숨기기'),
          onclick: function () {
            o.hideRow(o.getSelectedRows());
            o.hideColumn(o.getSelectedColumns());
          },
        });
        items.push({
          title: jSuites.translate('전체 보이기'),
          onclick: function () {
            o.showRow(o.getSelectedRows());
            o.showColumn(o.getSelectedColumns());
          },
        });
      }
      if (section === 'viewport') {
        items.push({
          title: jSuites.translate('전체 숨기기'),
          onclick: function () {
            o.getRow().forEach((obj, idx) => {
              o.hideRow(idx);
            });
            o.getColumn().forEach((obj, idx) => {
              o.hideColumn(idx);
            });
          },
        });
        items.push({
          title: jSuites.translate('전체 보이기'),
          onclick: function () {
            o.getRow().forEach((obj, idx) => {
              o.showRow(idx);
            });
            o.getColumn().forEach((obj, idx) => {
              o.showColumn(idx);
            });
          },
        });
      }
      if (section == 'header') {
        items.push({
          title: jSuites.translate('숨기기'),
          onclick: function () {
            o.hideColumn(o.getSelectedColumns());
          },
        });

        items.push({
          title: jSuites.translate('보이기'),
          onclick: function () {
            o.showColumn(o.getSelectedColumns());
          },
        });
      }

      if (section == 'cell' || section == 'row') {
        if (x > 3) return [];

        var srs = o.getSelectedRows();

        if (
          srs.every(
            item => o.getValue(`A${item + 1}`) !== '간접비' && isVisibleTotalData(o.getValue(`A${item + 1}`), '!=&&')
          )
        ) {
          if (o.getValue(`B${y + 1}`) != '소계') {
            items.push({
              title: jSuites.translate('품목추가'),
              icon: 'add',
              onclick: function () {
                var startIdx = srs[srs.length - 1];
                if (x < 1) {
                  o.insertRow(currentRevisionCnt + 1, startIdx - (currentRevisionCnt + 1));
                  worksheet = worksheets[0];
                  addItem(startIdx - (currentRevisionCnt + 1) + 2);
                } else {
                  o.insertRow(currentRevisionCnt + 1, startIdx + 1, true);
                  worksheet = worksheets[0];
                  addItem(startIdx + 1 + 1);
                }
              },
            });
          }

          if (x < 1) {
            items.push({
              title: jSuites.translate('공종추가'),
              icon: 'add',
              onclick: function () {
                addType(srs[srs.length - 1] + 1);
              },
            });
          }
        }

        items.push({
          title: jSuites.translate('숨기기'),
          onclick: function () {
            o.hideRow(o.getSelectedRows());
          },
        });

        items.push({
          title: jSuites.translate('보이기'),
          onclick: function () {
            o.showRow(o.getSelectedRows());
          },
        });

        if (
          srs.every(
            item =>
              o.getValue(`B${item + 1}`) != '소계' &&
              o.getValue(`A${item + 1}`) !== '간접비' &&
              isVisibleTotalData(o.getValue(`A${item + 1}`), '!=&&')
          )
        ) {
          items.push({
            title: jSuites.translate('삭제'),
            onclick: function () {
              o.deleteRow(o.getSelectedRows().length ? undefined : parseInt(y));
            },
          });
        }
      }

      return items;
    },
  });

  worksheet = worksheets[0];

  data.forEach((item, index) => {
    if (item.category === '간접비') {
      columns.forEach(col => {
        if (
          (col === 'M' || col === 'V' || col === 'AE' || col === 'AN') &&
          (item.item === '작업설 부산물' ||
            item.item === '운반비' ||
            item.item === '재료시험비' ||
            item.item === '폐기물처리비')
        ) {
          worksheet.setReadOnly(`${col}${index + 1}`, false);
        } else {
          worksheet.setReadOnly(`${col}${index + 1}`, true);
        }
      });
    }

    if (isVisibleTotalData(item.category, '==||')) {
      worksheet.setMerge(`A${index + 1}`, 4, 1);
      columns.forEach(col => {
        worksheet.setReadOnly(`${col}${index + 1}`, true);
      });
    }

    if (item.revision != `${currentRevision}`) {
      columns.forEach(col => {
        worksheet.setReadOnly(`${col}${index + 1}`, true);
      });
    }
  });
}

function isVisibleTotalData(val, type) {
  switch (type) {
    case '!=&&':
      return (
        val != '소계' &&
        val != '합계' &&
        val != '직접비소계' &&
        val != '간접비소계' &&
        val != '부가가치세' &&
        val != '세금' &&
        val != '총합계'
      );
    case '==||':
      return (
        val === '소계' ||
        val === '합계' ||
        val === '직접비소계' ||
        val === '간접비소계' ||
        val === '부가가치세' ||
        val === '세금' ||
        val === '총합계'
      );

    default:
      return false;
  }
}

// 세부 공종(공사 종류) 추가
function addType(startIdx = 3) {
  startIdx++;
  var category = '공통가설공사';
  var itemCnt = 3;
  worksheet = worksheets[0];

  worksheet.insertRow((itemCnt + 1) * (currentRevisionCnt + 1), startIdx - 1, true);
  setCellData('readonlyBasic', 'A', startIdx, category);
  worksheet.setMerge(`A${startIdx}`, 1, (itemCnt + 1) * (currentRevisionCnt + 1));

  for (var i = 0; i < itemCnt; i++) {
    addItem(startIdx + i * (currentRevisionCnt + 1));
  }

  worksheet.setMerge(`B${startIdx + 3 * (currentRevisionCnt + 1)}`, 3, 1 * (currentRevisionCnt + 1));
  setCellData('readonlyBasic', 'B', startIdx + 3 + 3 * currentRevisionCnt, '소계');
  // 소계
  for (var j = 0; j <= currentRevisionCnt; j++) {
    setCellData('readonlyBasic', 'E', `${startIdx + 3 + 3 * currentRevisionCnt + j}`, j == 0 ? '최초' : `${j}차변경`);
    for (var i = 5; i < columns.length - 1; i++) {
      setCellData(
        'subTotal',
        columns[i],
        startIdx + 3 + 3 * currentRevisionCnt + j,
        '',
        '',
        '',
        '',
        startIdx,
        j == 0 ? '최초' : `${j}차변경`
      );
    }
    worksheet.setReadOnly(`AP${startIdx + 3 + 3 * currentRevisionCnt + j}`, true);
  }
}

// 품목 셋팅
function addItem(startIdx) {
  if (currentRevisionCnt > 0) {
    worksheet.setMerge(`B${startIdx}`, 1, currentRevisionCnt + 1);
    worksheet.setMerge(`C${startIdx}`, 1, currentRevisionCnt + 1);
    worksheet.setMerge(`D${startIdx}`, 1, currentRevisionCnt + 1);
  }

  for (var i = startIdx; i <= startIdx + currentRevisionCnt; i++) {
    // 변경 차수
    setCellData('readonlyBasic', 'E', `${i}`, i - startIdx == 0 ? '최초' : `${i - startIdx}차변경`);
    // 실행예정 > 단가
    setCellData('basic', 'P', i, `=G${i}*${rating}`);
    setCellData('basic', 'R', i, `=I${i}*${rating}`);
    setCellData('basic', 'T', i, `=K${i}*${rating}`);
    // 정산내역
    setCellData('basic', 'AG', i, `=X${i}`);
    setCellData('readonlyBasic', 'AH', i, `=Y${i}`);
    setCellData('readonlyBasic', 'AJ', i, `=AA${i}`);
    setCellData('readonlyBasic', 'AL', i, `=AC${i}`);
    // 금액
    for (var j = 0; j < columns_total.length; j++) setCellData('mul', columns_total[j], i, '', ...columns_total_col[j]);
    // 합계 > 단가
    for (var j = 0; j < columns_total_unit.length; j++)
      setCellData('sum', columns_total_unit[j], i, '', ...columns_total_unit_col[j]);
    // 합계 > 금액
    for (var j = 0; j < columns_total_total.length; j++)
      setCellData('sum', columns_total_total[j], i, '', ...columns_total_total_col[j], '', '');
    // 수량
    setCellData('equal', 'O', i, '', 'F');
    setCellData('equal', 'X', i, '', 'O');
    setCellData('equal', 'AG', i, '', 'X');
    worksheet.setReadOnly(`AG${i}`, false);
    // 이전 변경 차수 readonly
    if (i - startIdx != currentRevisionCnt) {
      for (var j = 5; j < columns.length; j++) worksheet.setReadOnly(`${columns[j]}${i}`, true);
    }
  }
}

// 값 셋팅
// * 주의사항 : 함수 실행 전 worksheet 셋팅 필수
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
