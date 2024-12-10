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
    html {
        height: 90%;
    }

    body {
        height: 90%;
    }

    .readonly {
        color: black !important;
        background: #f0f0f0 !important;
    }

    .jss_frozen_row.readonly {
        color: black !important;
        background: #f0f0f0 !important;
        font-weight: bold;
    }

    .spreadsheet {
        font-size: 12px;
        width: 100%;
        height: 100%;
    }

    .jtabs-content,
    .jss_worksheet,
    .jss_content {
        height: 100% !important;
    }
</style>

<body>
    <div style="display: ruby;">
        <h1>테스트 페이지</h1>
        <input type="button" onclick="history.back()" value="뒤로가기" />
    </div>
    <div>
        <input type="button" onclick="add();" value="공종추가" />
        <!-- <input type="button" onclick="change();" value="설계변경" /> -->
        <input type="button" onclick="save();" value="저장" />
    </div>
    <div id='spreadsheet' class="spreadsheet"></div>
    <script>
        jspreadsheet.setLicense('YjU2NGQ4N2NhZjE1OWI0YWUxMTUzOWFlMDgwNTBiZTMxYWMyZGY4MTY4ZTMxOTFjZWRjYjY4MmMzMTUzOWZmN2M5YTM4MTZlMjJhY2JkZjcxMmY5ZWM4Yjk3NWU4YWYxMzg3YThjNjhkMjM2NzI5ZDkzM2UzZGQyOTVkYWM5OWUsZXlKamJHbGxiblJKWkNJNkltWmlaV0ZrWW1GaFptWmtPVGsxTjJJeU5qUTVaV0UxWVRFMVpXTXdZakptWXpZd05URTVPV1VpTENKdVlXMWxJam9pWTJodmQyOXVhblZ1SWl3aVpHRjBaU0k2TVRjek5qRXlNVFl3TUN3aVpHOXRZV2x1SWpwYkluZGxZaUlzSW14dlkyRnNhRzl6ZENKZExDSndiR0Z1SWpvek1Td2ljMk52Y0dVaU9sc2lkamNpTENKMk9DSXNJblk1SWl3aWRqRXdJaXdpZGpFeElpd2labTl5YlhWc1lTSXNJbVp2Y20xeklpd2ljbVZ1WkdWeUlpd2ljR0Z5YzJWeUlpd2lhVzF3YjNKMFpYSWlMQ0p6WldGeVkyZ2lMQ0pqYjIxdFpXNTBjeUlzSW5aaGJHbGtZWFJwYjI1eklpd2lZMmhoY25Seklpd2ljSEpwYm5RaUxDSmlZWElpTENKemFHVmxkSE1pTENKemFHRndaWE1pTENKelpYSjJaWElpWFgwPQ==');
    </script>
    <script src="https://cdn.jsdelivr.net/npm/jspreadsheet@latest/dist/jspreadsheet.formula.js"></script>
    <script type="text/javascript" src="../views/jspreadsheet/data.js"></script>
    <!-- <script type="text/javascript" src="../views/jspreadsheet/test.js"></script> -->
    <!-- <script type="text/javascript" src="../views/jspreadsheet/test1.js"></script> -->
    <!-- <script type="text/javascript" src="../views/jspreadsheet/test2.js"></script> -->
    <script type="text/javascript" src="../views/jspreadsheet/test3.js"></script>
</body>

</html>