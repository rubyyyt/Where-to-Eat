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

var sweets = ['MNGO', 'ICMonster', 'Little Dipper', 'Freeze', 'Boboi Gelato',
              '85C Bakery','iDessert','ShareTea', 'Boba Bar', 'Cauldron Ice Cream',
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
