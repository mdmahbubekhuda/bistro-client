import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    // parallax background image fixed
    <section className="grid bg-[url(./assets/home/featured.jpg)] bg-cover bg-fixed">
      {/* for black overlay */}
      <div className="bg-black col-start-1 row-start-1 z-10 opacity-60"></div>
      {/* content */}
      <div className="col-start-1 row-start-1 z-20">
        <SectionTitle heading="featured item" subHeading="check it out" />
        <div className="md:flex justify-center items-center py-20 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 text-white">
            {/* todo- use current date */}
            <p>Feb 10, 2024</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quibusdam molestiae dicta incidunt consequuntur fugit architecto
              repellat. Commodi minima veniam eos explicabo voluptatem,
              voluptatibus provident harum, esse quo, ullam aspernatur porro
              nihil ratione vel? Beatae, quas error hic ratione, quis ullam
              maiores, fugit quod perspiciatis eum unde tempora laboriosam
              culpa.
            </p>
            <button className="btn btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
