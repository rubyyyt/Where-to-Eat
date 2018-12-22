var fast = ['In-N-Out', 'Taco Bell', 'Sonic','McDonalds', 'Five Guys', 'Del Sushi',
            'Dominos', 'Papa Johns','Rigobertos', 'Vallertas','Chick-fil-A', 'Shake Shack',

]

var sitdown = ['Koon Thai', 'Pho La Jolla', 'Red Robins', 'RakiRaki Ramen',
              'Regents Pizza', 'BJs', 'Snooze', 'Chipotle', 'Din Tai Fung',
              'Cross Street','Tacos El Gordo','The Taco Stand','Phils BBQ',
              'Taste of the Himalayas','Raising Canes', 'Sab-E-Lee', 'Star Anise',
              'Dirty Birds', 'Sizzling Pot King', 'Tribute Pizza', 'Tasty Pot',
              'Hodads', '100s Seafood Grill Buffet', 'Puesto', 'Oscars Mexican Seafood',
              'Poki One N Half', 'Sushi Ki', 'The Melting Pot', 'Volare Italian Restaurant',
              'Mama Mia Pizza Restaurant','Michelines Pita House'
]

var sweets = ['<a href="https://www.yelp.com/biz/mngo-cafe-san-diego">MNGO</a>', '<a href="https://www.yelp.com/biz/icmonster-san-diego-6">ICMonster</a>', '<a href="https://www.yelp.com/biz/lil-dipper-san-diego-2">Lil Dipper</a>', '<a href="https://www.yelp.com/biz/freeze-san-diego-san-diego-2?osq=freeze">Freeze</a>', '<a href="https://www.yelp.com/biz/bobboi-natural-gelato-la-jolla">Bobboi Natural Gelato</a>',
              '<a href="https://www.yelp.com/biz/85-c-bakery-cafe-san-diego-7?osq=85c+Bakery+Cafe">85C Bakery</a>','<a href="https://www.yelp.com/biz/idessert-by-jean-philippe-san-diego?osq=idessert">iDessert</a>','<a href="https://www.yelp.com/biz/sharetea-san-diego-2?osq=sharetea">Sharetea</a>', '<a href="https://www.yelp.com/biz/boba-bar-and-desserts-san-diego-2?osq=boba+bar">Boba Bar</a>', '<a href="https://www.yelp.com/biz/cauldron-ice-cream-san-diego-6">Cauldron Ice Cream</a>',
              'SomiSomi'
]


function fastfood() {
  var randomNumber1 = Math.floor(Math.random()*(fast.length));
  if(document.getElementById("fastDisplay") != null){
    document.getElementById('fastDisplay').innerHTML = fast[randomNumber1];
  }
}


function sitdownfoods() {
  var randomNumber2 = Math.floor(Math.random()*(sitdown.length));
  if(document.getElementById("sitdownDisplay") != null){
  document.getElementById('sitdownDisplay').innerHTML = sitdown[randomNumber2];
  }
}

function desserts() {
  var randomNumber3 = Math.floor(Math.random()*(sweets.length));
  if(document.getElementById("dessertDisplay") != null){
  document.getElementById('dessertDisplay').innerHTML = sweets[randomNumber3];
  }
}
