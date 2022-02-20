import Section1TopBanner from "components/home-1/Section1";
import Section10Categories from "components/home-1/Section10";
import Section11MoreForYou from "components/home-1/Section11";
import Section12OurPromises from "components/home-1/Section12";
import Section2Deals from "components/home-1/Section2";
import Section3TopCategories from "components/home-1/Section3";
import Section5NewArrivals from "components/home-1/Section5";
import Section7Phones from "components/home-1/Section7";
import AppLayout from "components/layout/AppLayout";
import { Box } from "@mui/system";

const IndexPage = () => {
  return (
    <AppLayout>
      <Section1TopBanner />
      <Section10Categories />
      {/* <Section3TopCategories /> */}
      <Section2Deals />
      {/* <Section4TopRatings /> */}
      <Section5NewArrivals />
      {/* <Section13BigDiscounts /> */}
      {/* <Section7Phones /> */}
      <Section11MoreForYou />
      <Section12OurPromises />
    </AppLayout>
  );
};

export default IndexPage;
