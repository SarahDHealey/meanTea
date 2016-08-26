app.factory('CartFactory', ['$http', function($http) {
  var factory = {};
  factory.myCart = [];
  factory.runningTotal = 0;

  factory.delete = function(product){
    var index = this.myCart.indexOf(product);
    this.myCart.splice(index, 1);
    factory.orderTotal();
  }
  factory.orderTotal = function(){
    var counter = 0;
    for (var i = 0; i < factory.myCart.length; i++) {
      counter += (factory.myCart[i].price * factory.myCart[i].quantity);
    }
    factory.runningTotal = counter;
  }
  factory.add = function(product, quantity) {
    console.log(factory.myCart)
    if(factory.myCart.length > 0) {
      for (var i = 0; i < factory.myCart.length; i++) {
        if(product._id == factory.myCart[i]._id) {
          return factory.myCart[i].quantity += Number(quantity);
        } else if (i == factory.myCart.length-1) {
          product.quantity = Number(quantity);
          factory.myCart.push(product);
          return factory.myCart;
        }
      }
    } else {
      product.quantity = Number(quantity);
      factory.myCart.push(product);
      return factory.myCart;
    }
    }
    return factory;

}]);
