var fast = ['In-N-Out', 'Taco Bell', 'Sonic','McDonalds', 'Five Guys', 'Del Sushi',
            'Dominos', 'Papa Johns','Rigobertos', 'Vallertas','Chick-fil-A', 'Shake Shack',

]

var sitdown = ['Koon Thai Kitchen (4 Stars, 1300+ Reviews)', 'Pho La Jolla (3 Stars, 850+ Reviews)', 'Red Robins (3.5 Stars, 600+ Reviews)', 'RakiRaki Ramen (4 Stars, 3000+ Reviews)',
              'Regents Pizzeria (4 Stars, 900+ Reviews)', 'BJs (3.5 Stars, 250+ Reviews)', 'Snooze (4 Stars, 500+ Reviews)', 'Chipotle (3 Stars, 300+ Reviews)', 'Din Tai Fung (4.5 Stars, 500+ Reviews)',
              'Cross Street Chicken(4.5 Stars, 800+ Reviews)','Tacos El Gordo (4.5 Stars, 3900+ Reviews)','The Taco Stand (4.5 Stars, 2500+ Reviews)','Phils BBQ (4.5 Stars, 13,000+ Reviews)',
              'Taste of the Himalayas (3.5 Stars, 350+ Reviews)','Raising Canes (3.5 Stars, 400+ Reviews)', 'Sab-E-Lee (4 Stars, 450+ Reviews)', 'Star Anise (3.5 Stars, 650+ Reviews)',
              'Dirty Birds (4 Stars, 1000+ Reviews)', 'Sizzling Pot King (4 Stars, 350+ Reviews)', 'Tribute Pizza (4.5 Stars, 400+ Reviews)', 'Tasty Pot (4 Stars, 350+ Reviews)',
              'Hodads (4 Stars, 5000+ Reviews)', '100s Seafood Grill Buffet (4 Stars, 750+ Reviews)', 'Puesto (4 Stars, 2000+ Reviews)', 'Oscars Mexican Seafood (4.5 Stars, 2500+ Reviews)',
              'Poki One N Half (4.5 Stars, 150+ Reviews)', 'Sushi Ki (3.5 Stars, 850+ Reviews)', 'The Melting Pot (4 Stars, 1000+ Reviews)', 'Volare Italian Restaurant (4 Stars, 550+ Reviews)',
              'Mamma Mia Pizza Restaurant (3.5 Stars, 600+ Reviews)','Michelines Pita House (4.5 Stars, 450+ Reviews)','Buffalo Wild Wings (3 Stars, 300+ Reviews)'
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
