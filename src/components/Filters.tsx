import styled from 'styled-components'
import { getUniqueValues } from '../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, filterProducts, updateFilter } from '../store/ProductSlice'
import { useEffect } from 'react'
import { AppDispatch } from '../store/store'
import { RootState } from '../store/store'

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { filter, all__products } = useSelector((state: RootState) => state.products)
  const { name, category, company, color, min__price, max__price, price, free__shipping } = filter
  const categories = getUniqueValues(all__products, 'category')

  const filterChangeHandler = (e: any) => {
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'category':
        value = e.target.textContent
        break
      case 'color':
        value = e.target.dataset.value
        break
      case 'price':
        value = Number(value)
        break
      case 'free__shipping':
        value = e.target.checked
        break
    }
    dispatch(updateFilter({ name, value }))
  }

  useEffect(() => {
     if (all__products && all__products.length > 0) {
    dispatch(filterProducts());
  }
  }, [dispatch, filter, all__products])

  return (
    <Wrapper>
      <div className='content'>
        {/* Search filter */}
        <form onSubmit={(e) => e.preventDefault()} className="form-control">
          <input
            type="text"
            value={name}
            name="name"
            className="search-input"
            placeholder="search for item"
            onChange={filterChangeHandler}
          />
        </form>
        {/* Shipping filter */}
        <div className='form-control shipping'>
          <label htmlFor='shipping'>free shipping</label>
          <input
            type='checkbox'
            name='free__shipping'
            id='shipping'
            checked={free__shipping}
            onChange={filterChangeHandler}
          />
        </div>
        {/* Category filter */}
        <div className='form-control'>
          <h5>category</h5>
          <div>
            {categories.map((value, index) => {
              return (
                <button
                  key={index}
                  onClick={filterChangeHandler}
                  type='button'
                  name='category'
                  className={value === category ? 'active' : undefined}
                >
                  {value}
                </button>
              )
            })}
          </div>
        </div>
        {/* Clear filter */}
        <div className='form-control'></div>
        <button onClick={()=> dispatch(clearFilter())} type='button' className='clear-btn'>
          clear filter
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    outline: none;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  input[type='checkbox'] {
    appearance: none; /* Removes default browser styling */
    width: 20px;
    height: 20px;
    border: 2px solid rgb(183, 184, 184); /* MUI primary blue */
    border-radius: 4px; /* Rounded corners for modern look */
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  } /* Checked State */
  input[type='checkbox']:checked {
    background-color: var(--clr-primary-10); /* MUI primary blue */
    border-color: var(--clr-primary-10);
  }
  input[type='checkbox']:checked::before {
    content: '✔';
    display: block;
    color: #fff; /* White checkmark */
    font-size: 16px;
    position: absolute;
    top: -4px;
    left: 2px;
  } /* Hover and Focus Effects */
  input[type='checkbox']:hover {
    border-color: var(--clr-primary-10); /* Slightly darker blue on hover */
  }
  input[type='checkbox']:focus {
    box-shadow: 0 0 0 3px var(--clr-primary-9); /* Adds blue focus outline */
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 3rem;
    }
  }
`
export default Filters
