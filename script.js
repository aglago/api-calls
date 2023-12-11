// function to fetch data from API

const returnData = async ()=> {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data;
}

// function to print data acquired from the API

const logData = async ()=> {
    var products = await returnData();

    console.log(products.products);

    for (const product of products.products)
        create_product(product.images[0], product.title, product.price);
};

// create product container function

const create_product = (image, name, price)=> {
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

    // complete product div

    desc.appendChild(prodName);
    // desc.appendChild(prodDesc);
    desc.appendChild(prodPrice);
    product.appendChild(img);
    product.appendChild(desc);
    section.appendChild(product);
};

// collecting page to store products

const product = ()=> {
    

    // creating div
    const product_container = document.createElement('div');
    product_container.classList.add('');
};

logData();
