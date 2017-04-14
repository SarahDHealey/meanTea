var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  location.hash = '#/';
  $routeProvider
  .when("/", {
    templateUrl : "views/products.html",
    controller : "ProductsController"
  })
  .when("/cart", {
    templateUrl : "views/cart.html",
    controller : "CartController"
  })
  .otherwise({
  redirectTo: '/'
});
});