app.factory('CartFactory', ['$http', function($http) {
  var factory = {};
  factory.myCart = [];

  factory.add = function(product, quantity) {
    if (!factory.myCart.length) {
      product.quantity = quantity;
      factory.myCart.push(product);
    }
    if (factory.myCart.length) {
      for (var i = 0; i < factory.myCart.length; i++) {
        if(factory.myCart[i]._id == product._id) {
          console.log('*********found it')
          console.log(factory.myCart[i]);
          factory.myCart[i].quantity += quantity;
        }
      }
      for (var j = 0; j < factory.myCart.length; j++) {
        if(factory.myCart[j]._id !== product._id) {
          console.log('***********did not find it in the loop')
          product.quantity = quantity;
          factory.myCart.push(product);
        }
      }
    }
}

factory.checkTotal = function(quantity){
console.log(factory.myCart);
}

    return factory;

}]);
