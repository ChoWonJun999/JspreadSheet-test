var data = [
    [
        "세부공종", "품목", "규격", "단위", "변경 차수"
        , "도급내역", "도급내역", "도급내역", "도급내역", "도급내역", "도급내역", "도급내역", "도급내역", "도급내역"
        , "실행예정", "실행예정", "실행예정", "실행예정", "실행예정", "실행예정", "실행예정", "실행예정", "실행예정"
        , "시행내역", "시행내역", "시행내역", "시행내역", "시행내역", "시행내역", "시행내역", "시행내역", "시행내역"
        , "정산내역", "정산내역", "정산내역", "정산내역", "정산내역", "정산내역", "정산내역", "정산내역", "정산내역"
        , "비고"
    ],
    [
        "세부공종", "품목", "규격", "단위", "변경 차수"
        , "수량", "직접재료비", "직접재료비", "직접노무비", "직접노무비", "기계경비", "기계경비", "합계", "합계"
        , "수량", "직접재료비", "직접재료비", "직접노무비", "직접노무비", "기계경비", "기계경비", "합계", "합계"
        , "수량", "직접재료비", "직접재료비", "직접노무비", "직접노무비", "기계경비", "기계경비", "합계", "합계"
        , "수량", "직접재료비", "직접재료비", "직접노무비", "직접노무비", "기계경비", "기계경비", "합계", "합계"
    ],
    [
        "세부공종", "품목", "규격", "단위", "변경 차수"
        , "수량", "단가", "금액", "단가", "금액", "단가", "금액", "단가", "금액"
        , "수량", "단가", "금액", "단가", "금액", "단가", "금액", "단가", "금액"
        , "수량", "단가", "금액", "단가", "금액", "단가", "금액", "단가", "금액"
        , "수량", "단가", "금액", "단가", "금액", "단가", "금액", "단가", "금액"
    ],
    [
        "건축 > 공통가설공사", "조립식가설사무소 / 도급자용,감독,감리자용", "15개월", "M2", "최초"
        , 100, 500, '=F4*G4', 50000, '=F4*I4', 200, '=F4*K4', '=G4+I4+K4', '=H4+J4+L4'
    ],
    [
        "건축 > 공통가설공사", "공사용 가설전기 설치", "분전반+강재전선관+배선", "개소", "최초"
        , 200, 400, '=F5*G5', 80000, '=F5*I5', 300, '=F5*K5', '=G5+I5+K5', '=H5+J5+L5'
    ],
    [
        "건축 > 가설공사", "시스템동바리 설치 및 해체", "H=10m이하, 3개월", "M3", "최초"
        , 50, 200, '=F6*G6', 10000, '=F6*I6', 150, '=F6*K6', '=G6+I6+K6', '=H6+J6+L6'
    ]
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
}

var cells = {
    A1: { readonly: true },
    B1: { readonly: true },
    C1: { readonly: true },
    D1: { readonly: true },
    E1: { readonly: true },
    F1: { readonly: true },
    O1: { readonly: true },
    X1: { readonly: true },
    AG1: { readonly: true },
    AP1: { readonly: true },

    F2: { readonly: true },
    G2: { readonly: true },
    I2: { readonly: true },
    K2: { readonly: true },
    M2: { readonly: true },

    O2: { readonly: true },
    P2: { readonly: true },
    R2: { readonly: true },
    T2: { readonly: true },
    V2: { readonly: true },

    X2: { readonly: true },
    Y2: { readonly: true },
    AA2: { readonly: true },
    AC2: { readonly: true },
    AE2: { readonly: true },

    AG2: { readonly: true },
    AH2: { readonly: true },
    AJ2: { readonly: true },
    AL2: { readonly: true },
    AN2: { readonly: true },

    G3: { readonly: true },
    H3: { readonly: true },
    I3: { readonly: true },
    J3: { readonly: true },
    K3: { readonly: true },
    L3: { readonly: true },
    M3: { readonly: true },
    N3: { readonly: true },

    P3: { readonly: true },
    Q3: { readonly: true },
    R3: { readonly: true },
    S3: { readonly: true },
    T3: { readonly: true },
    U3: { readonly: true },
    V3: { readonly: true },
    W3: { readonly: true },

    Y3: { readonly: true },
    Z3: { readonly: true },
    AA3: { readonly: true },
    AB3: { readonly: true },
    AC3: { readonly: true },
    AD3: { readonly: true },
    AE3: { readonly: true },
    AF3: { readonly: true },

    AH3: { readonly: true },
    AI3: { readonly: true },
    AJ3: { readonly: true },
    AK3: { readonly: true },
    AL3: { readonly: true },
    AM3: { readonly: true },
    AN3: { readonly: true },
    AO3: { readonly: true },
};

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        language: 'ko',
        freezeColumns: 4,
        freezeRows: 3,
        tableOverflow: true,
        tableWidth: '1900px',
        tableHeight: '800px',
        minDimensions: [42, 100],
        columns: [
            { width: '180px' },
            { width: '340px' },
            { width: '220px' },
            { width: '65px' },
            { readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
            { type: 'number', mask: '#,##0', readonly: true },
        ],
        mergeCells: mergeCells,
        cells: cells
    }]
});
