app.controller('ProductsController', function($scope, ProductsFactory, CartFactory){


  $scope.view = {};
  $scope.view.products = ProductsFactory.getAllProducts;
  $scope.view.myCart = CartFactory.myCart;
  $scope.view.totalArray = [];
  $scope.revisedTotal = 0;
  $scope.myCart = CartFactory.myCart;

  $scope.add = function(product, quantity) {
    quantity = quantity || 1;
    CartFactory.add(product, quantity);
    CartFactory.checkTotal(quantity);
  }

  $scope.setMaster = function(category) {
    $scope.selected = category;
  }

  $scope.isSelected = function(category) {
      return $scope.selected === category;
  }

  $scope.view.arrUnique = function(){
    for (var i = 0; i < ProductsFactory.getAllProducts.length; i++) {
      ProductsFactory.arr.push(ProductsFactory.getAllProducts[i].categories);
    }
    ProductsFactory.merged = [].concat.apply([], ProductsFactory.arr);
    return ProductsFactory.arrNoDupe(ProductsFactory.merged);
  }

});
