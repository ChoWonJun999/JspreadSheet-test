<%@ page contentType="text/html; charset=UTF-8" language="java" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabulator Page</title>
        <link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet">
        <script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-latest.min.js"></script>
        <style>
            .tabulator .tabulator-cell {
                text-align: center;
                vertical-align: middle;
                border-bottom: 1px solid #aaa;
            }

            .tabulator .tabulator-cell .tabulator-range-selected {
                background-color: #9abcea;
            }

            .tabulator .tabulator-header .tabulator-col {
                text-align: center;
                vertical-align: middle;
            }

            .tabulator-row.tabulator-row-even {
                background-color: #fff;
            }

            .tabulator-cell {
                background-color: #f0f0f0;
            }

            .tabulator-editable {
                background-color: #fff;
            }
        </style>
    </head>

    <body>
        <h1>테스트 페이지</h1>
        <div id="example-table" class="example-table"></div>
        <script type="text/javascript" src="../views/tabulator/test.js"></script>
    </body>

    </html>