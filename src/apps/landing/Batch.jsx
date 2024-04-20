import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const Batch = () => {
    const batches = [
        {
          name: "Batch Name",
          class: "Class XI",
          targetYear: "2025",
          price: "Rs. 3599",
          imgSrc: "https://www.adarshbarnwal.com/wp-content/uploads/2022/03/Jee-Mains.jpg"
        },
        {
          name: "Batch Name",
          class: "Class XI",
          targetYear: "2025",
          price: "Rs. 1499",
          imgSrc: "https://www.adarshbarnwal.com/wp-content/uploads/2022/03/Jee-Mains.jpg"
        },
        {
          name: "Batch Name",
          class: "Class XI",
          targetYear: "2025",
          price: "Rs. 2599",
          imgSrc: "https://www.adarshbarnwal.com/wp-content/uploads/2022/03/Jee-Mains.jpg"
        },
        // Add more batches as needed
      ];
  return (
    <section className="grid gap-5 sm:gap-12 sm:mb-4 batch-courses">
        <h1 className="sm:p-5 mx-auto text-4xl font-bold text-white md:text-5xl">Join our latest batches</h1>
        <div className="flex gap-5 sm:flex sm:flex-row sm:justify-center sm:gap-10 buttons ">
   
        <SecondaryButton className='w-fit text-sm font-bold tracking-wider text-black bg-white rounded-md  sm:w-52 sm:px-6 sm:py-3 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 focus:bg-red-900 focus:text-white' label='JEE'/>
        <SecondaryButton className='w-fit text-sm font-bold tracking-wider text-black bg-white rounded-md sm:w-52 sm:px-6 sm:py-3 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 sm:text-lg outline outline-2 outline-red-800 outline-offset-2 focus:bg-red-900 focus:text-white' label='NEET'/>
        <SecondaryButton className='w-fit text-sm font-bold tracking-wider text-black bg-white rounded-md sm:w-52 sm:px-6 sm:py-3 sm:text-lg focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 outline outline-2 outline-red-800 outline-offset-2 focus:bg-red-900 focus:text-white' label='FOUNDATION'/>

        </div>

       <div className="grid grid-cols-1 gap-5  md:grid-cols-3 sm:place-items-center">
       {batches.map((batch, index) => (
      <div key={index} className="sm:grid sm:grid-cols-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 drop-shadow-lg sm:hover:scale-105 hover:bg-slate-50">
        <div href="#" className="p-5 ">
          <img
            className="object-cover rounded-lg h-full"
            src={batch.imgSrc}
            alt=""
          />
        </div>
        <div className="grid px-5 sm:pb-5 py-5 ">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {batch.name}
          </h5>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
            {batch.class}
          </h5>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
            Target year : {batch.targetYear}
          </h5>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-600 dark:text-white">
            {batch.price}
          </h5>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enroll
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    ))}
      
      </div>
    </section>
  );
};

export default Batch;
