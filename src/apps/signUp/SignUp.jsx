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
     <div className='flex justify-end gap-10 mr-20 items-center h-screen '>
        
            <div className='shadow-sm flex-col items-center '>
                <h2 className='text-center'>Register Now!</h2>
                <div className='flex items-center '>
                    <form className='bg-gray-200 p-10 bg-auto flex-col items-center' onSubmit={handleSubmit}>
                        <Input label="Your Name" type="text" placeholder="Write your name" />
                        <Input label="Mobile Number" type="phone" placeholder="Mobile number" />
                        <Input label="Email" type="email" placeholder="abc@gmail.com" />
                        <div>
                            <Dropdown id="classSelect" label="Class" options={classes} value={selectedClass} onChange={handleClassChange} />
                            <Dropdown id="streamSelect" label="Stream" options={streams} value={selectedStream} onChange={handleStreamChange} />
                            <PrimaryButton className=' px-20 rounded-md' label="Submit" />
                        </div>
                    </form>
                </div>
            </div>
     </div>
  )
}

export default SignUp