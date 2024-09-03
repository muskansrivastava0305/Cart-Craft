import {connect} from 'react-redux'
import App from '../App'
import {addToCart} from  '../component/action'
import cardItem from './reducer'
import CartOrder from './CartOrder'


const stateProps=state =>({

});
const dispatchProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(stateProps, dispatchProps )(CartOrder)