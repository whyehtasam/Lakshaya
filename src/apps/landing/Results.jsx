import React from 'react'
import Header from '../../components/header/Header'
import svg from '../../assets/results.svg'

const stats = [
  { title: 'Students', count: '10K+' },
  { title: 'Merits', count: '1.7K' },
  { title: 'Milestone', count: '15yrs' },
  { title: 'Batches', count: '6+' },
];

const Results = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap">
        <div className="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <Header
            title="With The Lakshya"
            header="Unlock Your Potential within the guidance of our experienced faculties."
            description="At our coaching 'THE LAKSHYA', we are dedicated to helping students succeed. With our comprehensive teaching style and practice tests, you can enhance your knowledge and skills in no time. Our coaching provides you library and practical lab to demonstrate the concept in practical way so that you excel in your studies and achieve your academic goals."
            titleStyle="lg:text-xl"
            headerStyle="sm:text-5xl text-black"
            descStyle="sm:text-lg text-gray-700"
            className="pb-6 pt-4 md:pl-0"
          />
          <div  className='grid grid-cols-2 sm:grid-cols-4 w-full gap-3'>

          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-md">
              <h2 className="title-font font-medium text-3xl text-white text-center">{stat.count}</h2>
              <p className="leading-relaxed text-center text-white">{stat.title}</p>
            </div>
          ))}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg mt-6 sm:mt-0">
          <img className="object-cover object-center sm:w-10/12 w-full mx-auto" src={svg} alt="stats" />
        </div>
      </div>
    </section>
  )
}

export default Results