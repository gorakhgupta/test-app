import Home from '../component/Home';
import {connect} from 'react-redux'
import {addToCart,removedFromCart} from '../service/actions/action'
const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:(data)=>dispatch(removedFromCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)