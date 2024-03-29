import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedItem />
      <PopularMenu />
      <Category />
      <Testimonials />
    </>
  );
};

export default Home;
