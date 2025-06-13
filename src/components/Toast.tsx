import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

type ToastProps = {
  message: string
  duration?: number
  onClose: () => void
  icon?: React.ReactNode
}

const Toast: React.FC<ToastProps> = ({ message, duration = 1500, onClose, icon }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <ToastWrapper>
      {' '}
      {icon && <span className='toast-icon'>{icon}</span>} {message}
    </ToastWrapper>
  )
}

const slideFadeIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const ToastWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 150px;
  right: 20px;
  background: #333;
  color: #fff;
  padding: 1rem 0.9rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  animation:
    ${slideFadeIn} 0.5s ease-out,
    ${fadeOut} 0.5s ease-in 1s;
  animation-fill-mode: forwards;
  z-index: 999;
  .toast-icon {
    margin-right: 10px;
   
  }
    /* Extra small devices (phones, 0 - 575px) */
    @media (max-width: 575px) {
      width: 50%;
      font-size: 0.6rem;
       bottom: 155px;
    }

    /* Small devices (landscape phones, 576px - 767px) */
    @media (min-width: 576px) and (max-width: 767px) {
        width: 50%;
        font-size: 0.7rem;
         bottom: 155px;
    }

    /* Medium devices (tablets, 768px - 991px) */
    @media (min-width: 768px) and (max-width: 991px) {
     width: 40%;
    }

    /* Large devices (desktops, 992px - 1199px) */
    @media (min-width: 992px) and (max-width: 1199px) {
       width: 40%;
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      font-size: 0.95rem;
      width: 30%;
    }
  
`

export default Toast
