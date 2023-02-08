export const initialState = {
    basket : [],
    user : null
}
// selector 
export const getBasketTotal = (basket)=>{
    // item price + amount , initial amount to be zero
   return basket?.reduce((amount,item)=> item.price + amount , 0)
}
const reducer = (state , action) =>{
    // console.log(action.type)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket , action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const indexToDel = state.basket.findIndex((e)=>{
                return e.id === action.id
            })
            let newBasket = [...state.basket];
            if(indexToDel >= 0){
                newBasket.splice(indexToDel,1);
            }else{
                console.warn(
                    `Cant remove the product (id : ${action.id}) as it not in the basket`
                )
            }
            return {
                ...state,
                basket : newBasket
            }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
            default:
                return state;
    }
}

export default reducer;