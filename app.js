var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  location.hash = '#/';
  $routeProvider
  .when("/", {
    templateUrl : "partials/products.html",
    controller : "ProductsController"
  })
  .when("/cart", {
    templateUrl : "partials/cart.html",
    controller : "CartController"
  })
  .otherwise({
    redirectTo: '/'
  });
});
