const textElements = document.querySelectorAll('.text,.text7');

const logo = document.getElementById('logo');
let title = document.getElementById('title'); 
let price = document.getElementById('price');
let product = [
  {
    "src": "./images/kids/item-1.jpg",
    "title": "Rainbow Unicorn Magic Slip-Ons for Kids", 
    "price": "$139"
  },
  {
    "src": "./images/kids/item-2.jpg",
    "title": "School-Ready Kids' Uniform Shoes", 
    "price": "$139",
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
  }
];

function checkout(a) {
  if(a <= product.length)
  {
  logo.src = product[a].src;
  title.textContent = product[a].title; // Corrected the variable name from 'tittle' to 'title'
  price.textContent = product[a].price;

}
// function pop(){
//  let pop=document.getElementsByClassName('buypop').style
//  if(pop.style.display=="none")
//  pop.innerHtml=style.display="blo"
// }
 
  
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
      newcard();
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


let i = 0;

// Update the content with the retrieved value
if (i !== null) {
  let x = document.getElementById('count');
  x.innerText = i;
  console.log(x)
}


function count() {
  let x = document.getElementById('count');
  i = parseInt(x.innerText) + 1;
  x.innerText = i;
  console.log(x)

  // Store the updated value in localStorage

}
function countminus() {
  let x = document.getElementById('count');
  i--;
  x.innerText = i;
}
function newcard() {


}





