app.factory('ProductsFactory', function() {

  return {
    arr : [],
    merged : [],
    noDupes : [],
    arrNoDupe : function(merged) {
      var temp = {};
      for (var i = 0; i < merged.length; i++) {
          temp[merged[i]] = "true";
      }
      var result = [];
      for (var key in temp) {
          result.push(key);
        }
      return result;
    },
    getAllProducts: [
      {
        "_id": "55c8ee82152165d244b98300",
        "name": "MODERN ACETATE SQUARE FLAT TOP WRAP SUNGLASSES W/ METAL DETAIL",
        "description": "Clean and cool modified rectangular wrap frames that are sure to fit your too cool for school attitude. Hand polished finish with silver detail along the arms. Made with an acetate based frame, metal hinges and polycarbonate UV protected lenses.",
        "price": 1000,
        "inStock": true,
        "rating": 5,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/mensSquare.jpg",
        "__v": 0,
        "categories": [ "square"]
      },
      {
        "_id": "55c8ee82152165d244b98304",
        "name": "HIGH FASHION TWO-TONED PANTOS CROSSBAR COLOR MIRROR LENS AVIATOR SUNGLASSES",
        "description": "Modern architectural construction that pays tribute to 50's and 60's eyewear trends, these pantoscopic frames feature a full metal rim with a glossy inner plastic frame for a contrasting appearance. This pair features an arched bridge design and flashy mirror-coated lenses for a heightened avant-garde expression this season. Made with a metal and plastic based frame, English style nose pieces, and UV400 protected polycarbonate mirrored lens.",
        "price": 1700,
        "inStock": true,
        "rating": 1,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womenswhitegoldaviator01.jpeg",
        "__v": 0,
        "categories": ["aviator"]
      },
      {
        "_id": "55c8ee82152165d244b98301",
        "name": "OFFICIALLY LICENSED NFL FOOTBALL MIAMI DOLPHINS SPORTS WRAP SUNGLASSES",
        "description": "Are you ready for some football? Watch the game in style and cheer on Brandon Marshall, Reggie Bush and the rest of the Miami Dolphins with these official NFL shades. Features prominent team logos on the temples and silicone temple grips for easy grip. Also includes a high quality microfiber soft pouch. Made with an acetate based frame, pin-hinges and polycarbonate UV protected lenses.",
        "price": 1600,
        "inStock": true,
        "rating": 2,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/mensnflmiamiwrap01.jpeg",
        "__v": 0,
        "categories": ["sport", "wrap"]
      },
      {
        "_id": "55c8ee82152165d244b98302",
        "name": "HIGH QUALITY SEMI-RIMLESS RUNNING CYCLING SPORTS WRAP SUNGLASSES",
        "description": "High quality modern half frame sunglasses that provide a semi-rimless lens for an unobstructed 180 degree view and silicone across the top of the frame so they won't slide down your face. Features an acetate based frame, silicone nose grips, silicone temple grips, inner silicone padding, and UV protected polycarbonate lens",
        "price": 1700,
        "inStock": true,
        "rating": 4,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/mensredwrap03.jpeg",
        "__v": 0,
        "categories": ["sport", "wrap"]
      },
      {
        "_id": "55c8ee82152165d244b98303",
        "name": "RED BLOODY MARY COCKTAIL PARTY FAVOR DRINKING NOVELTY SUNGLASSES",
        "description": "Complete with tomatoes, lime and celery, these bloody Mary cocktail sunglasses are the perfect addition to compliment any party or celebration! Great for novelty use, parties, photo booth or as a costume accessory. Made with a plastic based frame, pinned hinges, and polycarbonate UV400 protected lenses.",
        "price": 1200,
        "inStock": true,
        "rating": 1,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/redbloodymarycocktailsunglasses.jpeg",
        "__v": 0,
        "categories": ["novelty"]
      },
      {
        "_id": "55c8ee82152165d244b98305",
        "name": "WOMEN'S BOLD METAL BROW BAR SEMI-RIMLESS ROUND CAT EYE SUNGLASSES",
        "description": "Take your look to the next level with these bold cat eye sunglasses exquisitely crafted with round neutral-hued lenses, a semi-rimless frame, and a high point silhouette for that feminine touch. Slim metal temples and an elegant curved brow bar accent these flirty and ultra-luxurious sunglasses. Made with a plastic and metal based frame, English style nose pieces, metal hinges, and polycarbonate UV400 lenses.",
        "price": 1100,
        "inStock": true,
        "rating": 3,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womensblackgoldcateye01.jpg",
        "__v": 0,
        "categories": ["cateye"]
      },
      {
        "_id": "55c8ee82152165d244b98306",
        "name": "WOMENS RETRO BOLD COLORED MIRROR OVERSIZED ROUND SUNGLASSES",
        "description": "Take a trip to the past with these retro-inspired sunglasses designed with a thick round frame and colored mirror lenses that give off 70's vibes. Contrasted with gold-hued metal hinges and nose bridge for a luxurious feel, these fun and flirty sunglasses make the perfect fashion statement. Made with a plastic based frame, reinforced metal hinges, and polycarbonate UV400 lenses.",
        "price": 1700,
        "inStock": true,
        "rating": 3,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womenspinkcircle01.jpg",
        "__v": 0,
        "categories": ["circle"]
      },
      {
        "_id": "55c8ee82152165d244b98307",
        "name": "WOMENS FASHION THIN METAL CUTE HEART SHAPED SUNGLASSES",
        "description": "Adorable thin metal heart silhouette frame that are sure to win over hearts on all your sunny days! Stay fun flirty all season long in these metal heart shaped sunglasses. Made with a metal based frame, metal hinges and polycarbonate UV protected lenses.",
        "price": 1600,
        "inStock": true,
        "rating": 2,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womensredheart01.jpeg",
        "__v": 0,
        "categories": ["heart"]
      },
      {
        "_id": "55c8ee82152165d244b98308",
        "name": "PREMIUM HALF FRAME METAL RIVETS HORN RIMMED SUNGLASSES",
        "description": "Metal Trim and rivets add a sleek and luxurious feel to this classic style. Complete with stylishly wide temples that side high on the frame, these horn rimmed sunglasses come in a variety of bright colors to fit any style. Made with a plastic and metal based frame, English style nose pieces, metal hinges, and polycarbonate UV400 lenses.",
        "price": 2100,
        "inStock": true,
        "rating": 3,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womensredwayfarers01.jpg",
        "__v": 0,
        "categories": ["aviator"]
      },
      {
        "_id": "55c8ee82152165d244b98309",
        "name": "WOMENS CAT EYE SUNGLASSES WITH UV400 PROTECTED GRADIENT LENS",
        "description": "Chic and bold, these oversize cat eye sunglasses express a very 60's and 70's boho inspired look. These sassy cat eyes are the perfect edition to this season's collection. Made with a metal-based frame, metal hinges and UV400 protected lenses.",
        "price": 4158,
        "inStock": true,
        "rating": 2,
        "imageUrl": "https://s3-us-west-1.amazonaws.com/sunglassesshop/sunglassimages/womenstortoiseblueaviators01.jpeg",
        "__v": 0,
        "categories": ["aviator"]
      }
    ]
  }
});
