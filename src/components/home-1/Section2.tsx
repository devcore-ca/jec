import Light from "components/icons/Light";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard1 from "../product-cards/ProductCard1";

const Section2: FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator
      icon={<Light color="primary" />}
      title="Deals"
      seeMoreLink="#"
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={productList.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {productList.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard1
                id={ind}
                imgUrl={item.imgUrl}
                title={item.description}
                rating={item.rating}
                price={item.price}
                off={item.off}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

const productList = [
  {
    imgUrl: "/assets/images/products/flash-1.png",
    description: "Shoe Black",
    rating: 5,
    price: 100,
    off: 0,
  },
  {
    imgUrl: "/assets/images/products/flash-2.png",
    description: "Fossil Watch",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-3.png",
    description: "Smart Phone",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-4.png",
    description: "Smart Watch",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-1.png",
    description: "Shoe",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-2.png",
    description: "Watch",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-3.png",
    description: "Phone",
    rating: 5,
    price: 100,
    off: 10,
  },
  {
    imgUrl: "/assets/images/products/flash-4.png",
    description: "Smartwatch",
    rating: 5,
    price: 100,
    off: 10,
  },
];

export default Section2;
