

const PrimaryButton = ({label,className}) => {
  return (
    <button className={'bg-red-800 w-fit text-white py-2 px-4 ' + className}>{label} </button>
  )
}

export default PrimaryButton;