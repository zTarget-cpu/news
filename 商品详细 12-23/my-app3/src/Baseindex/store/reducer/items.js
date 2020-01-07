export default (state=[],action)=>{
    switch (action.type){
        case 'Get_Items' : 
            return [...state,...action.payload];
        default : 
            return state
    }
}