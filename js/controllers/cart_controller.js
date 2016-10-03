app.controller('CartController', function($scope, ProductsFactory, CartFactory) {
  CartFactory.orderTotal();
  $scope.view = {};
  $scope.myCart = CartFactory.myCart;
  $scope.view.cartFactory = CartFactory;
  $scope.view.delete = function(product){
    CartFactory.delete(product);
  }
  $scope.view.update = function(){
    CartFactory.orderTotal();
  }
});
