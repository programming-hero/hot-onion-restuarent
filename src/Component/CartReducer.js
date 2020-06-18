export const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, qty} = state; 
    let food;
    let updatePrice; 
    let updatedQty; 

    switch(action.type){

        case 'ADD_TO_CART':
            const check = shoppingCart.find(food => food.id === action.id); 
            if(check){
                return state; 
            } else{
                food = action.food; 
                food['qty'] = 1; 
                updatedQty = qty + 1; 
                updatePrice = totalPrice + food.price; 
                return {shoppingCart : [food, ...shoppingCart], totalPrice: updatePrice, qty: updatedQty}
            }
            break; 
            default: 
            return state; 
    }
}