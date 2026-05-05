
const allProduct = [
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    imageUrl: "https://picsum.photos/id/180/300/300",
  },
  {
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 1499,
    imageUrl: "https://picsum.photos/id/29/300/300",
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    imageUrl: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "Backpack",
    category: "Accessories",
    price: 1199,
    imageUrl: "https://picsum.photos/id/1062/300/300",
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    imageUrl: "https://picsum.photos/id/1080/300/300",
  },
  {
    name: "Coffee Mug",
    category: "Home & Kitchen",
    price: 299,
    imageUrl: "https://picsum.photos/id/30/300/300",
  },
  {
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 1899,
    imageUrl: "https://picsum.photos/id/1/300/300",
  },
  {
    name: "Denim Jacket",
    category: "Clothing",
    price: 2799,
    imageUrl: "https://picsum.photos/id/1005/300/300",
  },
];

// localStorage.setItem("products", JSON.stringify(allProduct))

let cartProducts = [];
let cartScreen = document.querySelector(".cartScreen");
let homeLink = document.querySelector(".home-link");
let cartLink = document.querySelector(".cart-link");
let section = document.querySelector("section");

let product = "";

function renderCarts() {
  let cartProduct = "";
  cartProducts.forEach((elem, index) => {
    cartProduct += `<div class="product-card" id="${index}">
          <div class="img">
            <img
              src="${elem.imageUrl}"
              alt="${elem.name}"
            />
          </div>

          <div class="details">
            <p>Name: ${elem.name}</p>
            <p>Category: ${elem.category}</p>
            <p>Price: $${elem.price}</p>
          </div>

          <div class="btns">
            <button onclick="removeCartProduct(${index})">Remove</button>
          </div>
          
        </div>`;
  });
  cartScreen.innerHTML = cartProduct;
}

function renderAllProducts() {

  allProduct.forEach(function (elem, index) {
    product += `<div class="product-card" id="${index}">
          <div class="img">
            <img
              src="${elem.imageUrl}"
              alt="${elem.name}"
            />
          </div>

          <div class="details">
            <p>Name: ${elem.name}</p>
            <p>Category: ${elem.category}</p>
            <p>Price: $${elem.price}</p>
          </div>

          <div class="btns">
            <button>Remove</button>
            <button id="${index}">Add to Cart</button>
          </div>
          
        </div>`;
  });

  section.innerHTML = product;
}

function AddtoCart() {
  section.addEventListener("click", function (elem) {
    if (!elem.target.id) {
      return;
    }

    let clickedCard = allProduct.find((product, index) => {
      return index == elem.target.id;
    });

    cartProducts.push(clickedCard);
    renderCarts();
    alert("Item added successfully");
  });
}

cartLink.addEventListener("click", function () {
  cartScreen.style.display = "flex";
  cartScreen.style.zIndex = 5;
});

homeLink.addEventListener("click", function () {
  cartScreen.style.display = "none";
  cartScreen.style.zIndex = -1;
});

function removeCartProduct(id) {
  let removedProduct = cartProducts.filter((elem, index) => {
    return index !== id;
  });
  cartProducts = removedProduct;
  renderCarts();
}

renderAllProducts();
AddtoCart()