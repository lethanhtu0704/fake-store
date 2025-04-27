import { AppDispatch, RootState } from '../store/store'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setSortingOption, setView, sortProduct } from '../store/ProductSlice'
import { ChangeEvent, useEffect } from 'react'
const Sort = () => {
  const { view__type, filtered__products } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  const handleChangeSorting = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value // Get the value of the selected option
    dispatch(sortProduct(selectedValue))
    dispatch(setSortingOption(selectedValue))
  }

  useEffect(() => {
    dispatch(sortProduct('lowest'))
  }, [])

  return (
    <Wrapper>
      <div className='btn-container'>
        <button className={view__type ? 'active' : 'null'} onClick={() => dispatch(setView())}>
          <BsFillGridFill></BsFillGridFill>
        </button>
        <button className={!view__type ? 'active' : 'null'} onClick={() => dispatch(setView())}>
          <BsList></BsList>
        </button>
      </div>
      <p> {`${filtered__products.length} products found`}</p>
      <hr></hr>
      <form>
        <label htmlFor='sort'>Sort by</label>
        <select onChange={handleChangeSorting} name='sort' id='sort' className='sort-input'>
          <option value='lowest'>Lowest</option>
          <option value='highest'>highest</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  form {
    display: flex;
    flex-direction: row;
  
    margin: 1rem auto;
    font-family: 'Roboto', Arial, sans-serif; /* Matches Material-UI font */
  }
  form label {
    font-size: 0.9rem;
    margin-right: 0.5rem;
    color: #5f6368; /* Subtle gray text */
  }
  .sort-input {
    padding: 10px 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    color: #333;
    transition:
      border-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;
  }
  .sort-input:hover,
  .sort-input:focus {
    border-color:var(--clr-primary-3); /* Material-UI primary blue */
    box-shadow: 0 0 0 2px var(--clr-primary-10); /* Adds a subtle glow */
    cursor: pointer;
  }

  /* Option Styling (Optional for Consistent Appearance) */
  .sort-input option {
    padding: 10px;
    background-color: #fff;
  }

  .sort-input option:hover {
  background-color: var(--clr-primary-10);
}

  /* Center Align the Form */
  form {
    align-items: center;
  }
`

export default Sort
