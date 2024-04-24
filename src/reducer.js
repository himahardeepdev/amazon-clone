export const initialState = {
    basket : [],
}

export const getBasketTotal = (basket)=>{
    return basket?.reduce((amount , item)=>{
        return item.price + amount
    },0);
}

function firstIndex(basketData,id){
    for(let i = 0 ; i < basketData.length ; i++){
        if(basketData[i].id === id){
            return i;
        }
    }
    return -1;
}


const reducer = (state , action)=>{
    
    switch (action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket : [...state.basket , action.item],
            }
        case "REMOVE_FROM_BASKET" : 
                    let basketData = state.basket;
                    basketData = basketData.splice(firstIndex(basketData,action.id) , 1);
                    return {
                        ...state , basket : basketData
                    }
        default:
            return state;
    }
}

export default reducer;
