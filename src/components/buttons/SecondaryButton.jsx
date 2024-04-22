

const SecondaryButton = ({label,className,onClick}) => {
    return (
      <button onClick={onClick} className={'bg-white  text-red-800 py-2 px-4 ' + className}>{label}</button>
    )
  }
  
  export default SecondaryButton;