import PageTitle from "../../../components/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <PageTitle />
      <Banner />
      <Category />
      <PopularMenu />
      <FeaturedItem />
      <Testimonials />
    </div>
  );
};

export default Home;
