import React from 'react'
import Carousel from '../../components/carousels/Carousel'
import AccordionD from '../../components/accordion/AccordionD'
import ScholarshipDetails from './ScholarshipDeatails';
import LastYearChamps from '../../components/cards/LastYearChamps';
import Container from '../../components/wrappers/Container';


const Scholorship = () => {
  return (
    <div>
      <Carousel />
      <Container>

      <AccordionD > </AccordionD>
      </Container>
      {/* <ScholarshipDetails/> */}
      <Container className={"bg-[#a21a4c] "}>
      <LastYearChamps/>
      </Container>
    </div>
    
  )
}

export default Scholorship;