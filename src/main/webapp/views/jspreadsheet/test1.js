var data = [
    {
        category: "세부공종", item: "품목", specification: "규격", unit: "단위", revision: "변경 차수",
        contract_quantity: "도급내역", plan_quantity: "실행예정", execution_quantity: "시행내역", adjustment_quantity: "정산내역", remark: "비고1",
    },
    {
        contract_quantity: "수량", contract_material_unit: "직접재료비", contract_labor_unit: "직접노무비", contract_equipment_unit: "기계경비", contract_total_unit: "합계",
        plan_quantity: "수량", plan_material_unit: "직접재료비", plan_labor_unit: "직접노무비", plan_equipment_unit: "기계경비", plan_total_unit: "합계",
        execution_quantity: "수량", execution_material_unit: "직접재료비", execution_labor_unit: "직접노무비", execution_equipment_unit: "기계경비", execution_total_unit: "합계",
        adjustment_quantity: "수량", adjustment_material_unit: "직접재료비", adjustment_labor_unit: "직접노무비", adjustment_equipment_unit: "기계경비", adjustemnt_total_unit: "합계",
    },
    {
        contract_material_unit: "단가", contract_material_total: "금액", contract_labor_unit: "단가", contract_labor_total: "금액", contract_equipment_unit: "단가", contract_equipment_total: "금액", contract_total_unit: "단가", contract_total_total: "금액",
        plan_material_unit: "단가", plan_material_total: "금액", plan_labor_unit: "단가", plan_labor_total: "금액", plan_equipment_unit: "단가", plan_equipment_total: "금액", plan_total_unit: "단가", plan_total_total: "금액",
        execution_material_unit: "단가", execution_material_total: "금액", execution_labor_unit: "단가", execution_labor_total: "금액", execution_equipment_unit: "단가", execution_equipment_total: "금액", execution_total_unit: "단가", execution_total_total: "금액",
        adjustment_material_unit: "단가", adjustment_material_total: "금액", adjustment_labor_unit: "단가", adjustment_labor_total: "금액", adjustment_equipment_unit: "단가", adjustment_equipment_total: "금액", adjustment_total_unit: "단가", adjustment_total_total: "금액"
    },
    {
        category: "건축 > 공통가설공사", item: "조립식가설사무소 / 도급자용,감독,감리자용", specification: "15개월", unit: "M2", revision: "최초",
        contract_quantity: 100, contract_material_unit: 500, contract_labor_unit: 200, contract_equipment_unit: 100,
        plan_quantity: 110, plan_material_unit: 520, plan_labor_unit: 210, plan_equipment_unit: 105,
        execution_quantity: 90, execution_material_unit: 510, execution_labor_unit: 190, execution_equipment_unit: 95,
        adjustment_quantity: 95, adjustment_material_unit: 505, adjustment_labor_unit: 195, adjustment_equipment_unit: 98,
        // contract_material_total: '=F4*G4', contract_labor_total: '=F4*I4', contract_equipment_total: '=F4*K4', contract_total_unit: '=G4+I4+K4', contract_total_total: '=H4+J4+L4',
        plan_material_total: '=O4*P4', plan_labor_total: '=O4*R4', plan_equipment_total: '=O4*T4', plan_total_unit: '=P4+R4+T4', plan_total_total: '=Q4+S4+U4',
        execution_material_total: '=X4*Y4', execution_labor_total: '=X4*AA4', execution_equipment_total: '=X4*AC4', execution_total_unit: '=Y4+AA4+AC4', execution_total_total: '=Z4+AB4+AD4',
        adjustment_material_total: '=AG4*AH4', adjustment_labor_total: '=AG4*AJ4', adjustment_equipment_total: '=AG4*AL4', adjustment_total_unit: '=AH4+AJ4+AL4', adjustment_total_total: '=AI4+AK4+AM4',
        remark: "비고1"
    },
    {
        category: "", item: "공사용 가설전기 설치", specification: "분전반+강재전선관+배선", unit: "개소", revision: "최초",
        contract_quantity: 200, contract_material_unit: 400, contract_labor_unit: 300, contract_equipment_unit: 50,
        plan_quantity: 190, plan_material_unit: 420, plan_labor_unit: 310, plan_equipment_unit: 55,
        execution_quantity: 180, execution_material_unit: 410, execution_labor_unit: 290, execution_equipment_unit: 45,
        adjustment_quantity: 185, adjustment_material_unit: 415, adjustment_labor_unit: 295, adjustment_equipment_unit: 48,
        contract_material_total: '=F5*G5', contract_labor_total: '=F5*I5', contract_equipment_total: '=F5*K5', contract_total_unit: '=G5+I5+K5', contract_total_total: '=H5+J5+L5',
        plan_material_total: '=O5*P5', plan_labor_total: '=O5*R5', plan_equipment_total: '=O5*T5', plan_total_unit: '=P5+R5+T5', plan_total_total: '=Q5+S5+U5',
        execution_material_total: '=X5*Y5', execution_labor_total: '=X5*AA5', execution_equipment_total: '=X5*AC5', execution_total_unit: '=Y5+AA5+AC5', execution_total_total: '=Z5+AB5+AD5',
        adjustment_material_total: '=AG5*AH5', adjustment_labor_total: '=AG5*AJ5', adjustment_equipment_total: '=AG5*AL5', adjustment_total_unit: '=AH5+AJ5+AL5', adjustment_total_total: '=AI5+AK5+AM5',
        remark: "비고2"
    },
    {
        category: "소계", contract_quantity: "=F4+F5", contract_material_unit: "=G4+G5"
    },
    {
        category: "건축 > 가설공사", item: "시스템동바리 설치 및 해체", specification: "H=10m이하, 3개월", unit: "M3", revision: "최초",
        contract_quantity: 50, contract_material_unit: 200, contract_labor_unit: 150, contract_equipment_unit: 50,
        plan_quantity: 55, plan_material_unit: 210, plan_labor_unit: 160, plan_equipment_unit: 55,
        execution_quantity: 48, execution_material_unit: 195, execution_labor_unit: 140, execution_equipment_unit: 45,
        adjustment_quantity: 50, adjustment_material_unit: 200, adjustment_labor_unit: 150, adjustment_equipment_unit: 50,
        contract_material_total: '=F7*G7', contract_labor_total: '=F7*I7', contract_equipment_total: '=F7*K7', contract_total_unit: '=G7+I7+K7', contract_total_total: '=H7+J7+L7',
        plan_material_total: '=O7*P7', plan_labor_total: '=O7*R7', plan_equipment_total: '=O7*T7', plan_total_unit: '=P7+R7+T7', plan_total_total: '=Q7+S7+U7',
        execution_material_total: '=X7*Y7', execution_labor_total: '=X7*AA7', execution_equipment_total: '=X7*AC7', execution_total_unit: '=Y7+AA7+AC7', execution_total_total: '=Z7+AB7+AD7',
        adjustment_material_total: '=AG7*AH7', adjustment_labor_total: '=AG7*AJ7', adjustment_equipment_total: '=AG7*AL7', adjustment_total_unit: '=AH7+AJ7+AL7', adjustment_total_total: '=AI7+AK7+AM7',
        remark: "비고3"
    },
    {
        category: "소계", contract_quantity: "=F7", contract_material_unit: "=G7"
    },
    {
        category: "간접비", item: "작업설 부산물", specification: "단가의", unit: "100%", revision: "최초",
        contract_equipment_unit: 50,
        plan_equipment_unit: 55,
        execution_equipment_unit: 45,
        adjustment_equipment_unit: 50,
        remark: "비고3"
    },
    {
        category: "", item: "건설하도급대금지급보증서(수수료)", specification: "(직.재-부산물+직.노+산출경비) 의", unit: "0.02%", revision: "최초",
        contract_equipment_unit: 50,
        plan_equipment_unit: 55,
        execution_equipment_unit: 45,
        adjustment_equipment_unit: 50,
        remark: "비고3"
    },
    {
        category: "소계", contract_quantity: "=F9+F10", contract_material_unit: "=G9+G10"
    },
    {
        category: "합계", contract_quantity: "=F6+F7+F9", contract_material_unit: "=G6+G7+G9"
    },
];

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

    // 소계
    A6: [4, 1],
    A8: [4, 1],
    A11: [4, 1],
    // 합계
    A12: [4, 1],
}

var cells = {};

// A~AP, 1~3까지 반복적으로 설정
const columns = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF",
    "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP"
];

for (let row = 1; row <= 3; row++) {
    columns.forEach((col) => {
        cells[`${col}${row}`] = { readonly: true };
    });
}

var formulas = {};
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
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
            { name: 'category', width: '200px', readonly: true },
            { name: 'item', width: '340px' },
            { name: 'specification', width: '220px' },
            { name: 'unit', width: '65px' },
            { name: 'revision', readonly: true },
            { name: 'contract_quantity', type: 'number', mask: '#,##0' },
            { name: 'contract_material_unit', type: 'number', mask: '#,##0' },
            // { name: 'contract_material_total', type: 'number', mask: '#,##0' },
            { name: 'contract_material_total', type: 'number', mask: '#,##0', readonly: true },
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
            { name: 'remark' }
        ]
    }]
});
