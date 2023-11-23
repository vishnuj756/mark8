
const textElements = document.querySelectorAll('.text,.text7');

const logo = document.getElementById('logo');
let title = document.getElementById('title1'); 
let price = document.getElementById('price');
let product = [
  {
    "src": "./images/kids/item-1.jpg",
    "title": "Rainbow Unicorn Magic Slip-Ons for Kids", 
    "price": 139
  },
  {
    "src": "./images/kids/item-2.jpg",
    "title": "School-Ready Kids' Uniform Shoes", 
    "price": 139,
  },
  {
    "src": "./images/kids/item-3.jpg",
    "title": "Trendy Tots High-Top Fashion Shoes", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-4.jpg",
    "title": "School-Ready Kids' Uniform Shoes", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-5.jpg",
    "title": "All-Star Sports Athletic Shoes for Kids", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-6.jpg",
    "title": "Light-Up Superhero Sneakers for Little Heroes", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-7.jpg",
    "title": "Luxury Designer High Heel Pumps", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-8.jpg",
    "title": "Luxury Designer High Heel Pumps", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-9.jpg",
    "title": "Tiny Toes Ballet Flats – Perfect for Parties", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-10.jpg",
    "title": "Boys' Adventure-Ready Hiking Boot", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-11.jpg",
    "title": "Dazzling Princess Sparkle Shoes for Girl", 
    "price": "$139",
  },
  {
    "src": "./images/kids/item-12.jpg",
    "title": "Kids' Comfy Cloud Sneakers", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item1.jpg",
    "title": "leek Men's Black Oxford Dress Shoes", 
    "price": "$139",
  },
  {
    "src": "./images/mens/item2.jpg",
    "title": "High-Top Urban Sneakers for Men", 
    "price": "$139",
  },
  {
    "src": "./images/mens/item3.jpg",
    "title": "Men's All-Terrain Trail Running Shoes", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item4.jpg",
    "title": "Formal Wingtip Brogue Shoes for Men", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item5.jpg",
    "title": "Genuine Leather Driving Moccasins", 
    "price": "$139",
  },
  {
    "src": "./images/mens/item6.jpg",
    "title": "High-Top Urban Sneakers for Men", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item7.jpg",
    "title": "Casual Canvas Slip-On Shoes for Men", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item8.jpg",
    "title": "Stylish Men's Suede Chelsea Boots", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item9.jpg",
    "title": "Men's Waterproof Hiking Boots", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item10.jpg",
    "title": "Handcrafted Italian Leather Loafers", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item11.jpg",
    "title": "Athletic Performance Sneakers for Men", 
    "price": "$139",
  } ,
  {
    "src": "./images/mens/item12.jpg",
    "title": "Classic Leather Men's Dress Shoes", 
    "price": "$139",
  },
  {
    "src": "./images/women/item1.jpg",
    "title": "Elegant Leather Heels for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item2.jpg",
    "title": "Comfortable Athletic Sneakers", 
    "price": "$139",
  },
  {
    "src": "./images/women/item3.jpg",
    "title": "Stylish Ankle Boots for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item4.jpg",
    "title": "Chic Ballet Flats for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item5.jpg",
    "title": "Trendy Sandals with Floral Embellishments", 
    "price": "$139",
  },
  {
    "src": "./images/women/item6.jpg",
    "title": "Classic White Sneakers for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item7.jpg",
    "title": "Summer-ready Wedge Sandals for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item8.jpg",
    "title": "Luxury Designer High Heel Pumps", 
    "price": "$139",
  },
  {
    "src": "./images/women/item9.jpg",
    "title": "Casual Slip-On Loafers for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item10.jpg",
    "title": "Fashionable Knee-High Boots for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item11.jpg",
    "title": "Versatile Slingback Sandals for Women", 
    "price": "$139",
  },
  {
    "src": "./images/women/item12.jpg",
    "title": "Cozy Faux Fur Lined Winter Boots for Women", 
    "price": "$139",
  }
];
console.log(product)
function checkout(a) {
  if(a <= product.length)
  {
  logo.src = product[a].src;
  title.textContent = product[a].title; 
  price.textContent = product[a].price;
popopen();
addToWishlist(a);
}

 
  
}

// Call the checkout function to update the content when needed


function checkVisibility() {
  const windowHeight = window.innerHeight;

  textElements.forEach(textElement => {
    const textRect = textElement.getBoundingClientRect();


    // Check if the text element is in the viewport
    if (textRect.top < windowHeight && textRect.bottom >= 0) {
      textElement.style.opacity = 1;
    }
  });
}


// Add an event listener for the scroll event
window.addEventListener('scroll', checkVisibility);

// Initial check on page load
checkVisibility();

//  this function for arrow 

function wish(a) {
  try {
    let img1 = document.getElementById('wish' + a);
    if (img1.src.match('/images/wish-cart.png')) {
      img1.src = './images/wish-cart2.png'
      count();
      addToWishlist(a);
    }
    else if (img1.src.match('./images/wish-cart2.png')) {
      img1.src = './images/wish-cart.png';
      countminus();
    }
  }
  catch (error) {
    console.error(error);
  }

}


// let i = 0;

// // Update the content with the retrieved value
// if (i !== null) {
//   let x = document.getElementById('count');
//   x.innerText = i;
//   console.log(x)
// }


function count() {
  let x = document.getElementById('count');
  i = parseInt(x.innerText) + 1;
  x.innerText = i;
  console.log(x)
}

//   // Store the updated value in localStorage
function countminus() {
  let x = document.getElementById('count');
  i--;
  x.innerText = i;
}


const popup = document.getElementById('popup');
 function popclosed(){
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
  popup.style.transform='scale(0)'
  console.log("good")
 }
 function popopen(){
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  popup.style.transform='scale(1)'
  console.log("good")
 }
//  this code for quantity 
const plus = document.getElementById('qty_inc');
const decre = document.getElementById('qty_dnc');
const qty = document.getElementById('qty');
let quantity = parseInt(qty.textContent);


plus.addEventListener("click", () => {
  quantity++;
  if (quantity > 3) {
    quantity = 3;
    alert("Maximum allowed quantity is " + 3);
  }
  updateQuantity();
});

decre.addEventListener("click", () => {
  quantity--;
  if (quantity < 1) {
    quantity = 1;
  }
  updateQuantity();
});

function updateQuantity() {
  qty.textContent = quantity;
  localStorage.setItem("qu1", quantity);
  console.log()
}

var wishlistData = [];

function addToWishlist(a) {
  "use strict";
  const productPrice = product[a].price;
  let storedQuantity = localStorage.getItem("qu1");
  var currentItem = {
    "id": wishlistData.length + 1,
    "src": product[a].src,
    "name": product[a].title,
    "price": productPrice,
    "qty": storedQuantity,
    "total": storedQuantity * productPrice
  };

  
  wishlistData.push(currentItem);
  localStorage.setItem('wishlist', JSON.stringify(wishlistData));
}
// this code for login
