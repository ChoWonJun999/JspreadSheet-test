<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">

<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
        }

        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <h1>Welcome to the Home Page</h1>
    <p>Select a page to navigate:</p>
    <button onclick="window.location.href='/tabulator'">Go to Tabulator</button>
    <button onclick="window.location.href='/jspreadsheet'">Go to JSpreadsheet</button>
</body>

</html>