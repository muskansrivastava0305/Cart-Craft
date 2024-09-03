import {connect} from 'react-redux'
import App from '../App'
import {addToCart} from  '../component/action'
import cardItem from './reducer'


const stateProps=state =>({
   cardItem: state.cart.items,
});
const dispatchProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(stateProps, dispatchProps )(App)