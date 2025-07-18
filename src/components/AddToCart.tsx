import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import {  useNavigate } from 'react-router'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { ProductModel } from '../types/product'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { addToCart } from '../store/CartSlice'
import Toast from './Toast'
import { PiSealWarningFill } from "react-icons/pi";

const AddToCart: FunctionComponent<{ colors: string[]; stock: number; products: ProductModel; id: string }> = ({
  colors,
  stock,
  products,
  id
}) => {
  const [mainColor, setMainColor] = useState(colors[0])
  const [amountCart, setAmountCart] = useState(1)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
 const auth = useSelector((state: RootState) => state.auth)
 const [showToast, setShowToast] = useState(false)
  const increaseCartHandler = () => {
    setAmountCart((prev) => {
      let tempAmount = prev + 1
      if (prev >= stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decreaseCartHandler = () => {
    setAmountCart((prev) => {
      let tempAmount = prev - 1
      if (prev <= 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }
  const colorClickHandler = (index: number) => {
    setMainColor(colors[index])
  }
  return (
    <Wrapper>
      <div className='colors'>
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`color-btn ${mainColor === color ? 'active' : ''}`}
                style={{ background: color }}
                onClick={colorClickHandler.bind(null, index)}
              >
                {mainColor === color && <FaCheck></FaCheck>}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          increase={increaseCartHandler}
          decrease={decreaseCartHandler}
          amountCart={amountCart}
        ></AmountButtons>
        <button
          
          className='btn'
          onClick={() => {
            if(!auth.isAuthenticated){
              setShowToast(true)
              return ;
            }
            const payload = {amountCart, products, mainColor, id}
            dispatch(addToCart(payload))
            navigate('/cart')
          }}
        >
          Add to cart
        </button>
         { showToast && <Toast message="Please log in first to continue!" icon={<PiSealWarningFill  color="#dc2743" />}  onClose={() => setShowToast(false)} />}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
