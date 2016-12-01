    var app = angular.module("patientInfo", ["ngRoute",'ngStorage','ngMessages']);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "patientInfo.html",
            controller : "myCtrl"
        })
        .when( '/location', {
            templateUrl:"location.html",
             controller : "locationCtrl"
        });
     });
    

