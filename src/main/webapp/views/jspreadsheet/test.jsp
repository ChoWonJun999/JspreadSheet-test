<%@ page contentType="text/html; charset=UTF-8" language="java" %>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSpreadsheet Page</title>
        <script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
        <script src="https://jsuites.net/v5/jsuites.js"></script>

        <link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
        <link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

        <script src="https://jspreadsheet.com/v11/plugins/properties.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-latest.min.js"></script>

    </head>
    <style>
        .readonly {
            color: black !important;
            background: #f0f0f0 !important;
        }

        .jss_frozen_row.readonly {
            color: black !important;
            background: #f0f0f0 !important;
            font-weight: bold;
        }
    </style>

    <body>
        <h1>테스트 페이지</h1>
        <div id='spreadsheet' class="spreadsheet"></div>
        <script>
            jspreadsheet.setLicense('MmI1NDBiZDdhY2MxODgxNzc5NjM2MmExZWVjMTJlMDkyMDUzNGJmZDE0MTE5YWMxYWNlMTA4ZTI3ZGEwYTVlODViMTQ5ZGNjZmVhYTA4NmU2YjhkZDBlODhlYmY2ZmUzMzk5MTI0NWM5MDdlOGIwZjZhZjU1NzI4M2JhZTUwZDIsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpNek5UTTNORFF6TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZJak0wSWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luWTVJaXdpZGpFd0lpd2lkakV4SWl3aVkyaGhjblJ6SWl3aVptOXliWE1pTENKbWIzSnRkV3hoSWl3aWNHRnljMlZ5SWl3aWNtVnVaR1Z5SWl3aVkyOXRiV1Z1ZEhNaUxDSnBiWEJ2Y25SbGNpSXNJbUpoY2lJc0luWmhiR2xrWVhScGIyNXpJaXdpYzJWaGNtTm9JaXdpY0hKcGJuUWlMQ0p6YUdWbGRITWlMQ0pqYkdsbGJuUWlMQ0p6WlhKMlpYSWlMQ0p6YUdGd1pYTWlYU3dpWkdWdGJ5STZkSEoxWlgwPQ==');
        </script>
        <script src="https://cdn.jsdelivr.net/npm/jspreadsheet@latest/dist/jspreadsheet.formula.js"></script>
        <script type="text/javascript" src="../views/jspreadsheet/test1.js"></script>
    </body>

    </html>