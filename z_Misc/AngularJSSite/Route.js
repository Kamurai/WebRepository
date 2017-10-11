var app =
angular.module('AngularTestSite', ['Route']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/Index', { 
      controller: 'NavigationController', 
      templateUrl: 'Index.html' 
    }) 
    .otherwise({ 
      redirectTo: '/Index' 
    }); 
});
