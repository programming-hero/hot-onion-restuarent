export const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, qty} = state; 
    let theFood;
    let updatePrice; 
    let updatedQty;

    switch(action.type){

        case 'ADD_TO_CART':
            const check = shoppingCart.find(food => food.id === action.id); 
           
            if(check){
                return state; 
            } else{
                theFood = action.theFood;
                console.log(theFood); 
                theFood['qty'] = 1; 
                updatedQty = qty + 1; 
                updatePrice = totalPrice + theFood.price; 
                return {shoppingCart : [theFood, ...shoppingCart], totalPrice: updatePrice, qty: updatedQty}
            }
            break; 
            default: 
            return state; 
    }
}