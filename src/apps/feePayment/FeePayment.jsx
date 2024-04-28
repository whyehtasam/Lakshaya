import React from 'react'
import FeeForm from './FeeForm'
import BlobCircle from "../../components/wrappers/BlobCircle";

const FeePayment = () => {
  return (
    <>
    <div className="absolute h-[70vh] sm:h-auto sm:w-8/12 -z-50 -right-40 -top-0 sm:-right-20 sm:-top-40  opacity-50 sm:opacity-80">
      <BlobCircle />
    </div>
    <div>
      <FeeForm/>
    </div>
    </>
  )
}

export default FeePayment;