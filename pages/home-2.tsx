import GroceryFooter from "components/home-2/GroceryFooter";
import GrocerySection1 from "components/home-2/GrocerySection1";
import GrocerySection2 from "components/home-2/GrocerySection2";
import GrocerySection3 from "components/home-2/GrocerySection3";
import GrocerySection4 from "components/home-2/GrocerySection4";
import GrocerySection5 from "components/home-2/GrocerySection5";
import GrocerySection6 from "components/home-2/GrocerySection6";
import GrocerySection7 from "components/home-2/GrocerySection7";
import GrocerySection8 from "components/home-2/GrocerySection8";
import GrocerySection9 from "components/home-2/GrocerySection9";
import GrocerySidenav from "components/home-2/GrocerySidenav";
import GroceryLayout from "components/layout/GroceryLayout";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  getSection4Products,
  getSection5Products,
  getSection7Products,
  getSection8Products,
} from "utils/api/home2carousels";
import {
  getSection2Services,
  getSection3Categories,
} from "utils/api/home2Sections";
import { layoutConstant } from "utils/constants";
import { slideDown } from "animations/keyframes";
import clsx from "clsx";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";

const StyledContainer = styled(Container)(({ theme }) => ({
  ".sidenav": {
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    position: "relative",
    top: 0,
    height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    bottom: 0,
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  ".fixed": {
    position: "fixed",
    top: layoutConstant.headerHeight,
  },

  ".pageContent": {
    position: "relative",
    left: "unset",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    marginLeft: "1.75rem",
  },

  ".pageContentShifted": {
    left: layoutConstant.grocerySidenavWidth,
  },

  ".section1": {
    marginBottom: "3rem",
    marginTop: "1.75rem",
  },

  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(0)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  [theme.breakpoints.down("md")]: {
    ".sidenav": {
      display: "none",
    },
    ".pageContent": {
      width: "100% !important",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      left: "0px !important",
    },
  },
}));

interface Props {
  section2Services: any[];
  section3Category: any[];
  section4Products: any[];
  section5Products: any[];
  section7Products: any[];
  section8Products: any[];
}
const Home2: NextPage<Props> = (props) => {
  const {
    section2Services,
    section3Category,
    section4Products,
    section5Products,
    section7Products,
    section8Products,
  } = props;
  const [isSidenavFixed, setSidenavFixed] = useState(false);
  const scrollListener = useCallback(() => {
    setSidenavFixed(window.pageYOffset > layoutConstant.headerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <GroceryLayout>
      <StyledContainer sx={{ display: "flex", position: "relative" }}>
        <Box
          className={clsx({
            sidenav: true,
            fixed: isSidenavFixed,
          })}
        >
          <GrocerySidenav isFixed={isSidenavFixed} />
        </Box>
        <Box
          className={clsx({
            pageContent: true,
            pageContentShifted: isSidenavFixed,
          })}
        >
          <Box mb={6} mt={3}>
            <GrocerySection1 />
          </Box>

          <Box mb={6} overflow="hidden">
            <GrocerySection2 services={section2Services} />
          </Box>

          <Box mb={6}>
            <GrocerySection3 categories={section3Category} />
          </Box>

          <Box mb={6}>
            <GrocerySection4 products={section4Products} />
          </Box>

          <Box mb={6}>
            <GrocerySection5 products={section5Products} />
          </Box>

          <Box mb={6}>
            <GrocerySection6 />
          </Box>

          <Box mb={6}>
            <GrocerySection7 products={section7Products} />
          </Box>

          <Box mb={6}>
            <GrocerySection8 products={section8Products} />
          </Box>

          <Box mb={6}>
            <GrocerySection9 />
          </Box>

          <GroceryFooter />
        </Box>
      </StyledContainer>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const section2 = await getSection2Services();
  const section3 = await getSection3Categories();
  const section4 = await getSection4Products();
  const section5 = await getSection5Products();
  const section7 = await getSection7Products();
  const section8 = await getSection8Products();
  return {
    props: {
      section2Services: section2,
      section3Category: section3,
      section4Products: section4,
      section5Products: section5,
      section7Products: section7,
      section8Products: section8,
    },
  };
}

export default Home2;
