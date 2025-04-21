import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className='section-center'>
          <h3>Join our newsletter and get 20% off</h3>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, provident obcaecati! Impedit nihil eaque
              mollitia earum, autem molestias explicabo quisquam magni accusantium cumque animi quam ut libero incidunt
              voluptas. Quisquam provident at placeat voluptatum
            </p>
            <form className='contact-form' action='https://formspree.io/f/mqkwlkqb' method='POST'>
              <CustomInputContainer>
                <CustomInput type='text' placeholder='Email Address' />
                <CustomLabel>Email Address</CustomLabel>
              </CustomInputContainer>
              <button type='submit' className='submit-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 8rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 500px;
    max-width: 500px;
    position: relative;
  }
  .submit-btn {
    position: absolute;
    right: 6px;
    top: 6px;
    bottom: 6px;
    border: 0;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    outline: none;
    margin: 0;
    padding: 0 10px;
    width: 80px;
    border-radius: var(--radius);
    z-index: 2;
    font-weight: 500;
    transition: var(--transition);
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
      justify-items: flex-end;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rems 0;
  }
`

const CustomInputContainer = styled.div`
  position: relative;
  width: 100%;
`

const CustomInput = styled.input`
  width: 100%;
  padding: 16px 12px;
  border: 1px solid #bdbdbd; /* Normal border */
  border-radius: 4px; /* Rounded corners */
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s;
  &:-webkit-autofill {
    background-color: var(--clr-primary-10) !important; /* White background for autofill */
    color: #000 !important; /* Text color */
    box-shadow: 0 0 0px 1000px #ffffff inset !important; /* Prevent clipping */
    transition: background-color 5000s ease-in-out 0s; /* Smooth transition */
  }
  &:focus {
    border-color: var(--clr-primary-8); /* Change input border color */
  }
`

const CustomLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 14px;
  color: var(--clr-primary-8); /* Default label color */
  pointer-events: none;
  transition: all 0.3s ease-out;
  opacity: 0; /* Initially hidden */

  ${CustomInput}:focus + & {
    opacity: 1; /* Show the label when input is focused */
    top: -10px; /* Float the label */
    left: 10px;
    font-size: 12px;
    color: var(--clr-primary-8); /* Focused label color */
    background: white; /* Add background to label */
    padding: 0 4px; /* Adjust spacing to cover the 'line' effect */
  }
`

export default Contact
