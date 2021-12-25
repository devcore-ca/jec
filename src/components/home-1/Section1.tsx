import CarouselCard1 from 'components/carousel-cards/CarouselCard1'
import Carousel from 'components/carousel/Carousel'
import Navbar from 'components/navbar/Navbar'
import { Box, Container } from '@mui/material'
import { FC, Fragment } from 'react'

const Section1: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor="white" mb={7.5}>
        <Container sx={{ py: '2rem' }}>
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <CarouselCard1 />
            <CarouselCard1 />
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Section1
