import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const ScholarHero = () => {
  return (
    <div>
        <div className="flex flex-col justify-start gap-3 sm:gap-6 my-7">
            <h1 className="text-4xl font-bold text-red-800 md:text-5xl lg:text-7xl">Lakshaya Scholarship Test</h1>
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">They Say,</h1>
            <h1 className="text-4xl font-bold text-[#0a8c42] md:text-5xl lg:text-7xl">With Greay <br /> Journey Come Great <br /> Responsibility </h1>
            <div>
                <p className="mt-4 sm:text-lg text-gray-600 md:text-xl lg:text-3xl font-bold">here we are to help you lighten your burden.</p>
                {/* <p className="mt-4 sm:text-lg text-gray-600 md:text-xl lg:text-2xl">JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।</p> */}
            </div>
            <div className='flex gap-5 sm:mt-10 mt-5'>
                <PrimaryButton className='flex gap-2 sm:px-6 sm:py-3 sm:text-lg font-semibold tracking-wider rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700' label='Know Eligibility'/>
                <SecondaryButton className='sm:px-6 sm:py-3 sm:text-lg font-bold tracking-wider text-black bg-white rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:' label='Scholarship Registration'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default ScholarHero