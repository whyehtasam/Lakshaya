import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const ScholarHero = (props) => {
    const { title, subtitle, burdenText, inspirationText ,inspirationText2} = props;
  return (
    <div>
        <div className="flex flex-col justify-start gap-3 sm:gap-6 my-7">
            <h1 className="text-4xl font-bold text-red-800 md:text-5xl lg:text-7xl">{title}</h1>
            <h1 className="text-3xl font-bold text-gray-800 md:text-5xl lg:text-5xl">{subtitle}</h1>
            {/* <h1 className="text-4xl font-bold text-[#0a8c42] md:text-5xl lg:text-7xl">With Greay <br /> Journey Come Great <br /> Responsibility </h1> */}
            <div>
                <p className="mt-4 sm:text-lg text-gray-600 md:text-xl lg:text-3xl font-bold">{burdenText}</p>
                <p className="mt-4 sm:text-lg text-gray-600 md:text-xl lg:text-2xl">{inspirationText}</p>
                <p className="mt-4 sm:text-lg text-gray-600 md:text-xl lg:text-2xl">{inspirationText2}</p>

            </div>

            <div className="grid gap-5 mt-5 sm:flex sm:mt-10">
          <SecondaryButton
            className="w-full sm:w-fit font-bold tracking-wider text-black bg-white rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover"
            label="Scholorship Registration"
          />
          <PrimaryButton
            className=" w-full sm:w-fit gap-2 font-semibold tracking-wider text-center rounded-md sm:px-6 sm:py-3 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700"
            label="Check Eligibility"
          />
        </div>
            {/* <div className='grid gap-5  sm:flex sm:mt-10 mt-5'>
                <PrimaryButton className='flex gap-2 sm:px-6 sm:py-3 text-center sm:text-lg font-semibold tracking-wider rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:bg-red-700' label='Know Eligibility'/>
                <SecondaryButton className='sm:px-6 sm:py-3 sm:text-lg font-bold tracking-wider text-black bg-white rounded-md outline outline-2 outline-red-800 outline-offset-2 hover:' label='Scholarship Registration'/>
            </div> */}
            
            
        </div>
    </div>
  )
}

export default ScholarHero