import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Image1 from "./assets/Image3.png";
import Image2 from "./assets/Image4.png";
import Hero from "./components/Hero/Hero";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Image1,
  title2: "Air Solo Watch",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo, iste vero ipsum sunt id.",
  bgColor: "bg-[yellow]",
};
const BannerData1 = {
  discount: "30% OFF",
  title: "HAPPY HOURS",
  date: "10 Jan to 28 Jan",
  image: Image2,
  title2: "Smart Solo Watch",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo, iste vero ipsum sunt id.",
  bgColor: "bg-[#2dcc6f]",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData1} />
      <Blogs />
    </div>
  );
}
