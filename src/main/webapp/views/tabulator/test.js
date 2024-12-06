$(document).ready(function () {
    var data = [
        { category: "건축 > 공통가설공사", item: "조립식가설사무소 / 도급자용,감독,감리자용", specification: "15개월", unit: "M2", revision: "최초", contract_quantity: 100, contract_material_unit: 500, contract_labor_unit: 200, contract_equipment_unit: 100, plan_quantity: 110, plan_material_unit: 520, plan_labor_unit: 210, plan_equipment_unit: 105, execution_quantity: 90, execution_material_unit: 510, execution_labor_unit: 190, execution_equipment_unit: 95, adjustment_quantity: 95, adjustment_material_unit: 505, adjustment_labor_unit: 195, adjustment_equipment_unit: 98, remark: "비고1" },
        { category: "건축 > 공통가설공사", item: "공사용 가설전기 설치", specification: "분전반+강재전선관+배선", unit: "개소", revision: "최초", contract_quantity: 200, contract_material_unit: 400, contract_labor_unit: 300, contract_equipment_unit: 50, plan_quantity: 190, plan_material_unit: 420, plan_labor_unit: 310, plan_equipment_unit: 55, execution_quantity: 180, execution_material_unit: 410, execution_labor_unit: 290, execution_equipment_unit: 45, adjustment_quantity: 185, adjustment_material_unit: 415, adjustment_labor_unit: 295, adjustment_equipment_unit: 48, remark: "비고2" },
        { category: "건축 > 가설공사", item: "시스템동바리 설치 및 해체", specification: "H=10m이하, 3개월", unit: "M3", revision: "최초", contract_quantity: 50, contract_material_unit: 200, contract_labor_unit: 150, contract_equipment_unit: 50, plan_quantity: 55, plan_material_unit: 210, plan_labor_unit: 160, plan_equipment_unit: 55, execution_quantity: 48, execution_material_unit: 195, execution_labor_unit: 140, execution_equipment_unit: 45, adjustment_quantity: 50, adjustment_material_unit: 200, adjustment_labor_unit: 150, adjustment_equipment_unit: 50, remark: "비고3" }
    ];

    function calculateRowValues(row, prefix) {
        const quantity = row[`${prefix}_quantity`] || 0;
        const materialUnit = row[`${prefix}_material_unit`] || 0;
        const laborUnit = row[`${prefix}_labor_unit`] || 0;
        const equipmentUnit = row[`${prefix}_equipment_unit`] || 0;

        const materialTotal = quantity * materialUnit;
        const laborTotal = quantity * laborUnit;
        const equipmentTotal = quantity * equipmentUnit;
        const totalUnit = materialUnit + laborUnit + equipmentUnit;
        const totalTotal = materialTotal + laborTotal + equipmentTotal;

        return {
            [`${prefix}_material_total`]: materialTotal,
            [`${prefix}_labor_total`]: laborTotal,
            [`${prefix}_equipment_total`]: equipmentTotal,
            [`${prefix}_total_unit`]: totalUnit,
            [`${prefix}_total_total`]: totalTotal,
        };
    }

    function calculateInitialValues(data) {
        return data.map((row) => {
            const sections = ["contract", "plan", "execution", "adjustment"];
            sections.forEach((prefix) => {
                Object.assign(row, calculateRowValues(row, prefix));
            });
            return row;
        });
    }

    data = calculateInitialValues(data);

    function createColumn(title, field, options = {}) {
        return {
            title: title,
            field: field,
            width: options.width || 100,
            hozAlign: options.hozAlign || "right",
            editor: options.editor === false ? false : options.editor || "input",
            formatter: options.formatter || "money",
            formatterParams: options.formatterParams || {
                decimal: ".", // 소수점 구분자
                thousand: ",", // 천 단위 구분자
                symbol: "", // 통화 기호 (필요 시 추가)
                symbolAfter: false, // 통화 기호 위치
                precision: 0, // 소수점 이하 자리 수
            },
        };
    }

    function createNestedColumns(type) {
        return [
            { title: "단가", ...createColumn("단가", `${type}_unit`) },
            { title: "금액", ...createColumn("금액", `${type}_total`, { editor: false }) },
        ];
    }

    function createSection(title, prefix) {
        return {
            title: title,
            columns: [
                createColumn("수량", `${prefix}_quantity`, { width: 80 }),
                { title: "직접재료비", columns: createNestedColumns(`${prefix}_material`) },
                { title: "직접노무비", columns: createNestedColumns(`${prefix}_labor`) },
                { title: "기계경비", columns: createNestedColumns(`${prefix}_equipment`) },
                { title: "합계", columns: createNestedColumns(`${prefix}_total`) },
            ],
        };
    }

    var table = new Tabulator("#example-table", {
        data: data
        , history: true //테이블에서 실행 취소 및 다시 실행 작업 허용
        // , selectableRange: true // 범위 선택 활성화
        // , selectableRangeColumns: true // 열 범위 선택 활성화
        // , selectableRangeRows: true // 행 범위 선택 활성화
        // , frozenRows: true // 고정된 행이 포함된 경우 추가
        // , frozenColumns: true // 고정된 열이 포함된 경우 추가
        // , tabKeyNavigation: true // 탭 키로 셀 이동 활성화
        , columnDefaults: {
            headerSort: false,
        }, columns: [
            { title: "세부공종", field: "category", width: 150, hozAlign: "left", frozen: true, editor: "input" },
            { title: "품목", field: "item", width: 300, hozAlign: "left", frozen: true, editor: "input" },
            { title: "규격", field: "specification", width: 260, hozAlign: "left", frozen: true, editor: "input" },
            { title: "단위", field: "unit", width: 40, frozen: true, editor: "input" },
            { title: "변경 차수", field: "revision", width: 75, editor: "input" },
            createSection("도급내역", "contract"),
            createSection("실행예정", "plan"),
            createSection("시행내역", "execution"),
            createSection("정산내역", "adjustment"),
            { title: "비고", field: "remark", width: 100, hozAlign: "left", editor: "input" },
        ]
    });

    table.on("cellEdited", function (cell) {
        const field = cell.getField();
        const row = cell.getRow();
        const rowData = row.getData();

        const relevantFields = [
            "contract_quantity", "contract_material_unit", "contract_labor_unit", "contract_equipment_unit",
            "plan_quantity", "plan_material_unit", "plan_labor_unit", "plan_equipment_unit",
            "execution_quantity", "execution_material_unit", "execution_labor_unit", "execution_equipment_unit",
            "adjustment_quantity", "adjustment_material_unit", "adjustment_labor_unit", "adjustment_equipment_unit",
        ];

        if (!relevantFields.includes(field)) {
            return;
        }

        const calculateValues = (prefix) => {
            const quantity = parseFloat(rowData[`${prefix}_quantity`] || 0);
            const materialUnit = parseFloat(rowData[`${prefix}_material_unit`] || 0);
            const laborUnit = parseFloat(rowData[`${prefix}_labor_unit`] || 0);
            const equipmentUnit = parseFloat(rowData[`${prefix}_equipment_unit`] || 0);

            const materialTotal = quantity * materialUnit;
            const laborTotal = quantity * laborUnit;
            const equipmentTotal = quantity * equipmentUnit;
            const totalUnit = materialUnit + laborUnit + equipmentUnit;
            const totalTotal = materialTotal + laborTotal + equipmentTotal;

            return {
                [`${prefix}_material_total`]: materialTotal,
                [`${prefix}_labor_total`]: laborTotal,
                [`${prefix}_equipment_total`]: equipmentTotal,
                [`${prefix}_total_unit`]: totalUnit,
                [`${prefix}_total_total`]: totalTotal,
            };
        };

        const updatedValues = {
            ...calculateValues("contract"),
            ...calculateValues("plan"),
            ...calculateValues("execution"),
            ...calculateValues("adjustment"),
        };

        row.update(updatedValues);
    });
});