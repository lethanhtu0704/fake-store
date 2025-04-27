import styled from 'styled-components'
import { Link } from 'react-router'
import { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import PageHero from '../components/PageHero'
import CartContent from '../components/CartContent'
import { useEffect } from 'react'
import { updateCartTotal } from '../store/CartSlice'

const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(updateCartTotal())
  }, [cart])

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty page-100'>
          <div>
            <h2>There are no products!</h2>
            <Link to='/products' className='btn'>
              Fill it
            </Link>
          </div>
        </div>
      </Wrapper>
    )
  }
  return (
    <>
      <PageHero title='cart'></PageHero>
      <CartContent></CartContent>
    </>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
