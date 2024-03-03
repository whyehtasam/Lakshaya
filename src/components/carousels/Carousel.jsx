import React from 'react'


function Carousel() {
  
  return (
    <div className=' pt-[40px] pb-12 bg-pink-800 text-[#434343] text-center '>
      <div className=" m-auto overflow-hidden max-w-[1200px] px-[20px]">
        <h1 className="text-[#fff] text-4xl font-bold pb-8">WORDS FROM OUR CHAMP!</h1>

        <div className=" grid gap-4 lg:grid-cols-3 md:grid-cols-1 mx-auto ">
          <div className=" m-auto">
            <div className="   bg-[#fff] p-[30px]  rounded-[10px]">
              <img className='w-[100px] h-[100px] rounded-full m-auto'
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className=" text-[20px] uppercase mt-2 mb-2">John Waddrob</div>
              <div className=" text-[#f0932b] mb-[20px]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </div>

          <div className=" m-auto">
            <div className=" bg-[#fff] p-[30px]  rounded-[10px]">
              <img className='w-[100px] h-[100px] rounded-full m-auto'
                src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className=" text-[20px] uppercase mt-2 mb-2">John Waddrob</div>
              <div className=" text-[#f0932b] mb-[20px]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </div>

          
          <div className=" m-auto">
            <div className=" bg-[#fff] p-[30px]  rounded-[10px]">
            <img className='w-[100px] h-[100px] rounded-full m-auto'
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className=" text-[20px] uppercase mt-2 mb-2">John Waddrob</div>
              <div className=" text-[#f0932b] mb-[20px]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </div>


        </div>
      </div>
      
    </div>
  );
}


export default Carousel;