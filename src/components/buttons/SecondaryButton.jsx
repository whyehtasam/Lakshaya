

const SecondaryButton = ({label,className}) => {
    return (
      <button className={'bg-white w-fit text-red-800 py-2 px-4 ' + className}>{label}</button>
    )
  }
  
  export default SecondaryButton;