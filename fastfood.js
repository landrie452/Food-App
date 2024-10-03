import { cart,addtoCart } from './data/cart.js';
import { products } from './data/products.js';

let productHTML = '';
for (let i = 0; i < products.length; i++) {
    const productObject = products[i];
    const html = `
                <div  class = "product-container" >
                    <img = src="${productObject.image}" class="product">
                    <div class="product-info">
                        <p>${productObject.name}</p>
                        <span>$${(productObject.price / 100).toFixed(2)}</span>
                        <img src="${productObject.rating}" alt="" class="rating">
                        <button class='js-add-to-cart'
                         data-product-id = '${productObject.id}'
                         data-product-name = '${productObject.name}'
                        )'>Add to Cart</button>
                    </div>
                </div> `;

    productHTML += html;
}
document.querySelector('.products-section').innerHTML = productHTML;

    
/* Increasing Cart Quantity*/
function updateCartQuantity(){
    let cartquantity = 0;

    cart.forEach((item) => {
        cartquantity += item.quantity;
    });

    console.log(cart);
    document.querySelector('.cart-quantity').innerHTML = cartquantity;
}


document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.dataset);

        //Get the data that we attatch to the button:
        // productname and product id
        //from kabab case to camel case

        const productId = button.dataset.productId;
        const productName = button.dataset.productName;

        addtoCart(productName,productId);
        updateCartQuantity();
       
    });

    });