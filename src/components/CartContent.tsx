import styled from 'styled-components'
import { Link } from 'react-router'
import CartColumns from './CartColumns'
import { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { clearCart } from '../store/CartSlice'

const CartContent = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()

  function clearCartHandler() {
    dispatch(clearCart())
  }
  return (
    <Wrapper className='section section-center'>
      <CartColumns></CartColumns>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>
      })}
      <hr />
      <section className='link-container'>
        <Link to='/products' className='link-btn'>
          Continue Shopping
        </Link>
        <button className=' link-btn clear-btn' onClick={clearCartHandler}>
          Clear Shopping Cart
        </button>
      </section>
      <CartTotals></CartTotals>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
