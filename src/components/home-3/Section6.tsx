import ProductCard12 from 'components/product-cards/ProductCard12'
import ProductCard3 from 'components/product-cards/ProductCard3'
import { Box, Grid } from '@mui/material'
import React, { FC } from 'react'
import CategorySectionCreator from '../CategorySectionCreator'

const Section6: FC = () => {
  return (
    <CategorySectionCreator title="Trending Items">
      <Box mt={-0.5} mb={-0.5}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <ProductCard12
              id={0}
              imgUrl="/assets/images/products/long-product.png"
              title="ASUS ROG Strix G15"
              rating={4}
              price={250}
              off={56}
            />
          </Grid>
          <Grid item container md={9} xs={12} spacing={4}>
            {productList.map((item, ind) => (
              <Grid item xs={6} sm={4} key={ind}>
                <ProductCard3
                  id={ind}
                  imgUrl={item.imgUrl}
                  title="ASUS ROG Strix G15"
                  rating={4}
                  price={250}
                  off={56}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </CategorySectionCreator>
  )
}

const productList = [
  {
    imgUrl: '/assets/images/products/long-product.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt3.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt4.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt5.png',
  },
  {
    imgUrl: '/assets/images/products/chair-and-clothes.png',
  },
  {
    imgUrl: '/assets/images/products/t-shirt4.png',
  },
]

export default Section6
