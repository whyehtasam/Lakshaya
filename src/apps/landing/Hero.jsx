import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col justify-start gap-3 sm:gap-6 my-7">
            <h1 className="text-4xl font-bold text-red-800 md:text-5xl lg:text-7xl">Lakshaya Coaching:</h1>
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">Guiding Minds,</h1>
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-7xl">Building Generations</h1>
            <div>
                <p className="mt-4 text-lg text-gray-600 md:text-xl lg:text-2xl">JEE and NEET: A new paradigm in motivation and success direction.</p>
                <p className="mt-4 text-lg text-gray-600 md:text-xl lg:text-2xl">JEE और NEET: नए प्रेरणा और सफलता की दिशा में एक नया मोड़।</p>
            </div>
            <div className='flex gap-5 mt-10'>
                <PrimaryButton className='px-6 py-3 sm:text-lg font-semibold tracking-wider rounded-md outline outline-2 outline-red-800 outline-offset-2' label='Enroll Now'/>
                <SecondaryButton className='px-6 py-3 sm:text-lg font-semibold tracking-wider text-black bg-white rounded-md outline outline-2 outline-red-800 outline-offset-2' label='Contact Us'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Hero