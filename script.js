// function to fetch data from API

const returnData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data;
}

// function to print data acquired from the API

const logData = async () => {
    var products = await returnData();

    console.log(products.products);

    for (const product of products.products)
        create_product(product.images[0], product.title, product.price);
};

// create product container function

const create_product = (image, name, price) => {
    const section = document.getElementById('products');

    // product container 

    const product = document.createElement('div');
    product.className = 'product';

    // the image of the product

    const img = document.createElement('img');
    img.src = `${image}`;
    img.alt = 'product image';

    // the desc div

    const desc = document.createElement('div');
    desc.className = 'desc';
    const prodName = document.createElement('h4');
    prodName.innerHTML = `${name}`;
    // const prodDesc = document.createElement('p');
    // prodDesc.innerHTML = `${description}`;
    const prodPrice = document.createElement('p');
    prodPrice.innerHTML = `$${price}`;

    // add to cart button

    const add_to_cart = document.createElement('button');
    add_to_cart.innerHTML = 'Add to cart';
    add_to_cart.className = 'add_to_cart';
    add_to_cart.addEventListener('click', () => {
        addToCart(image, name, price);
        console.log('Add to cart');
    });

    // complete product div

    desc.appendChild(prodName);
    // desc.appendChild(prodDesc);
    desc.appendChild(prodPrice);
    desc.appendChild(add_to_cart);
    product.appendChild(img);
    product.appendChild(desc);
    section.appendChild(product);
};

// collecting page to store products

const product = () => {


    // creating div
    const product_container = document.createElement('div');
    product_container.classList.add('');
};

// array collecting cart items prices

const cart_items_prices = [];

function addToCart(image, name, price) {
    createCartItem(image, name, price);

    const cart_total = document.getElementById("cart_total_price");
    cart_total.innerHTML = `$${cart_items_prices.reduce((a, b) => a + b, 0)}`;
}

function createCartItem(image, name, price) {
    const cart_items = document.getElementById("cart_items");

    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";

    const cartItemInfoDiv = document.createElement("div");
    cartItemInfoDiv.className = "cart_item_info_div";

    const cartItemImage = document.createElement("img");
    cartItemImage.src = `${image}`;
    cartItemImage.alt = "product image";
    cartItemImage.className = "cart_item_img";

    const cartItemInfo = document.createElement("div");
    cartItemInfo.className = "cart_item_info";

    const cartItemName = document.createElement("h4");
    cartItemName.innerHTML = `${name}`;

    const cartItemPrice = document.createElement("p");
    cartItemPrice.innerHTML = `$${price}`;

    const cartItemRemove = document.createElement("button");
    cartItemRemove.innerHTML = "Remove";
    cartItemRemove.className = "cart_item_remove";
    cartItemRemove.addEventListener("click", () => {
        removeFromCart(cartItem);
    });

    // assembling the cart item
    cart_items.appendChild(cartItem);
    cartItem.appendChild(cartItemInfoDiv);
    cartItemInfoDiv.appendChild(cartItemImage);
    cartItemInfoDiv.appendChild(cartItemInfo);
    cartItemInfo.appendChild(cartItemName);
    cartItemInfo.appendChild(cartItemPrice);
    cartItem.appendChild(cartItemRemove);

    // adding the price of the item to the cart_items_prices array
    cart_items_prices.push(price);
}

function showCart() {
    const cart = document.getElementById('cart');

    if (cart.classList.contains('hidden')) {
        cart.classList.remove('hidden');
        cart.classList.add('show');
    } else {
        cart.classList.remove('show');
        cart.classList.add('hidden');
    }
}

// displaying the cart div when user clicks on the cart button

const cart_icon = document.getElementById('cart_icon');
cart_icon.addEventListener('click', showCart);

logData();
