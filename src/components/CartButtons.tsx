import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { AppDispatch, RootState } from '../store/store'
import { logout } from '../store/AuthSlice'
import { toggleSideBar } from '../store/StylingSlice'
import { useState } from 'react'
import { PiSealWarningFill } from 'react-icons/pi'
import Toast from './Toast'

const CartButtons = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const { cart } = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()
   const [showToast, setShowToast] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const handleAuthen = ():void => {
     dispatch(toggleSideBar())
     auth.isAuthenticated ? dispatch(logout()) : navigate('login')
  }
  return (
    <Wrapper className='cart-btn-wrapper'>
      <button  className='cart-btn'  onClick={() => {
                  if(!auth.isAuthenticated){
                    setShowToast(true)
                    return ;
                  }
                 
                  navigate('/cart')
                }}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart></FaShoppingCart>
          <span className='cart-value'>{cart.length}</span>
        </span>
      </button>
      <button
        type='button'
        className='auth-btn'
        onClick={handleAuthen}
      >
        {auth.isAuthenticated ? (
          <>
            Logout <FaUserMinus />
          </>
        ) : (
           <>
            Login <FaUserPlus />
          </>
          
        )}
      </button>
        { showToast && <Toast message="Please log in first to continue!" icon={<PiSealWarningFill  color="#dc2743" />}  onClose={() => setShowToast(false)} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
    border:none;
    background-color : unset;
    cursor: pointer;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
