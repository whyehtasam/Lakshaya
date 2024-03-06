import React from 'react'
import Input from '../../components/input/Input'
import { useState } from 'react'
import Dropdown from '../../components/dropdowns/Dropdown';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const SignUp = () => {
  // Define available classes and streams
const classes = ['JEE MAINS', 'JEE Advance', 'NEET', 'Dropper', '11th', '12th'];
const streams = ['Engineering', 'Medical']; // Corrected variable name

// State to manage the selected class and stream
const [selectedClass, setSelectedClass] = useState('');
const [selectedStream, setSelectedStream] = useState('');

// Function to handle class selection
const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
};

// Function to handle stream selection
const handleStreamChange = (event) => {
    setSelectedStream(event.target.value);
};

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    // You can submit the form data here
    console.log('Selected Class:', selectedClass);
    console.log('Selected Stream:', selectedStream);
};


  return (

    <div className='flex justify-between'>
        <div className='w-1/3'>
            <p>Poster</p>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
           <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">SignUp</h2>
  
            <form className="mx-auto max-w-lg rounded-lg border">
                <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                    <Input label="Your Name" type="phone" placeholder="enter name" />
                </div>

                <div>
                    <Input label="Mobile Number" type="phone" placeholder="enter mobile number" />
                </div>

                <div>
                    <Input label="Email ID" type="phone" placeholder="abc@gmail.com" q
                    />
                </div>
                
                <div>
                        <Dropdown id="classSelect" label="Class" options={classes} value={selectedClass} onChange={handleClassChange}  />
                        <Dropdown id="streamSelect" label="Stream" options={streams} value={selectedStream} onChange={handleStreamChange} />
                        {/* <PrimaryButton className=' px-20 rounded-md' label="Submit" /> */}
                    </div>
                    <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Submit</button>

                </div>
        
                <div className="flex items-center justify-center bg-gray-100 p-4">
                <p className="text-center text-sm text-gray-500">Already have account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</a></p>
                </div>
            </form>
       </div>
    </div>
    </div>

    
  )
}

export default SignUp