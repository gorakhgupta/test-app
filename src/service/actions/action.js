export const addToCart =(data)=>{
    console.warn("action",data)
    return {
        type:"ADD_TO_CART",
        data:data
    }
}
export const removedFromCart =()=>{
    // console.warn("action",data)
    return {
        type:"REMOVE_FROM_CART",
    }
}