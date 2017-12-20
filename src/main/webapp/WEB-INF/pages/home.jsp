<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>Maven Karma Jasmine</title>
    <script src="<c:url value='/webjars/angular/1.6.6/angular.min.js'/>"></script>
    <script src="<c:url value='/js/app.js'/>"></script>
    <script src="<c:url value='/js/controllers/Main.controller.js'/>"></script>
    <script src="<c:url value='/js/services/Math.service.js'/>"></script>
</head>
<body ng-app="mkj">
    <div ng-controller="MainController">
        <strong>Hello from {{name}}</strong>
    </div>
</body>
</html>
