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
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center pb-16 px-8 md:px-36">
          <div>
            <img
              src={featuredImg}
              className="w-full h-full block object-cover"
            />
          </div>
          <div className="text-white">
            {/* todo- use current date */}
            <p>Feb 10, 2024</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quibusdam molestiae dicta incidunt consequuntur fugit architecto
              repellat. Commodi minima veniam eos explicabo voluptatem,
              voluptatibus provident harum esse quo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
