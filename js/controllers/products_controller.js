app.controller('ProductsController', function($scope, ProductsFactory) {
  $scope.view = {};
  $scope.view.products = ProductsFactory.getAllProducts;

  $scope.view.arrUnique = function(){
    for (var i = 0; i < ProductsFactory.getAllProducts.length; i++) {
      ProductsFactory.arr.push(ProductsFactory.getAllProducts[i].categories);
    }
    ProductsFactory.merged = [].concat.apply([], ProductsFactory.arr);
    return ProductsFactory.arrNoDupe(ProductsFactory.merged);

    }

});
