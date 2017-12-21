<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Maven Karma Jasmine</title>
    <script src="webjars/angular/1.6.6/angular.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers/Main.controller.js"></script>
    <script src="js/services/Math.service.js"></script>
</head>
<body ng-app="mkj">
    <div ng-controller="MainController">
        <strong>Hello from {{name}}</strong>
    </div>
</body>
</html>
