export const cart = [];


// How to Update the Cart Quantity
//1.check if productname nga gkan sa data variable that we attatch to the button nga gkan pa sa product object
// already exist in the cart array


//how? 

//loop through the cart
//and pass a condition

//2. if we found a match increase cart quantity by 1
//3. if wala pa nag exist sa cart then add it to the cart

export function addtoCart(productName,productId) {
    let matchingItem;
    cart.forEach((item) => {
        if (productName === item.productName) {
            matchingItem = item;//It will be used to store a reference to an item in the cart that matches a specific productName.
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            productName: productName,
            quantity: 1
        });
    }
}