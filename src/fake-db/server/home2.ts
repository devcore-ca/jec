// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "../mock";

const serviceList = [
  {
    icon: "Truck",
    title: "Fast Delivery",
    subtitle: "Start from $10",
  },
  {
    icon: "FeedbackThumbsUp",
    title: "Feedback",
    subtitle: "97% positive",
  },
  {
    icon: "Shield",
    title: "Payment",
    subtitle: "100% secured",
  },
];
Mock.onGet("/api/grocery-section2/services").reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, serviceList];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

const shopByCategory = [
  {
    imgUrl: "/assets/images/icons/healthy-food.svg",
    title: "Fruits & Vegatables",
    subtitle: "Upto 60% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/fish.svg",
    title: "Fish & meat",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/wheat-flour.svg",
    title: "Rice & Flour",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/products/Orange 1kg 2.png",
    title: "Fruits & Vegatables",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/feeding-bottle.svg",
    title: "Baby Food",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/skincare.svg",
    title: "Personal Care",
    subtitle: "Upto 60% off",
    url: "/",
  },
];
Mock.onGet("/api/grocery-section3/shop-by-category").reply(() => {
  try {
    return [200, shopByCategory];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
