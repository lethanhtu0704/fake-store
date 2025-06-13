import { LoaderFunctionArgs, useParams } from 'react-router'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import { Link } from 'react-router'
import { RootState, store } from '../store/store'
import { useSelector } from 'react-redux'
import ProductImages from '../components/ProductImages'
import Stars from '../components/Stars'
import AddToCart from '../components/AddToCart'
import { getProductDetail } from '../store/ProductSlice'
import Loading from '../components/Loading'

const SingleProductPage = () => {
  const params = useParams()
  const { product } = useSelector((state: RootState) => state.products)
  const {isLoading} = useSelector(
    (state: RootState) => state.styling
  );

  const singleProduct = { ...product }

  const { name, price, company, description, stock, images, stars, reviews, colors } = singleProduct

  return (
    <Wrapper>
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          Back to products
        </Link>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='product-center'>
            {images && <ProductImages images={images}></ProductImages>}
            <section className='content'>
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews}></Stars>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p className='desc'>{description}</p>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? `${stock} in stock` : 'out of stock'}
              </p>
              <p className='info'>
                <span>SKU :</span>
                {params.id}
              </p>
              <p className='info'>
                <span>Brand :</span>
                {company}
              </p>
              <hr />
              {stock > 0 && (
                <AddToCart colors={colors} stock={stock} products={singleProduct} id={params.id as string}></AddToCart>
              )}
            </section>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const productId = params.id // params.id is of type string | undefined
    if (!productId) {
      throw new Error('Product ID not found in the route parameters')
    }
    // Dispatch the action or fetch the product detail directly
    store.dispatch(getProductDetail(productId)) // Wait for the dispatch to complete
    return null // You can return null or any data needed for rendering
  } catch (error) {
    console.error('Error fetching product detail:', error)
    throw error // Pass the error back to React Router
  }
}

export default SingleProductPage
