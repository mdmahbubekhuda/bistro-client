import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
import SearchBar from "../SearchBar/SearchBar";

const Cover = ({ coverImage, coverTitle, coverText }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImage}
      strength={-200}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="grid h-[60vh]">
        {/* dark overlay */}
        <div className="bg-black col-start-1 row-start-1 z-10 opacity-50"></div>
        {/* content */}
        <div className="col-start-1 row-start-1 z-20">
          <div className="flex flex-col gap-8 justify-center h-full items-center px-8 md:px-36 text-white">
            <h1 className="text-2xl lg:text-4xl capitalize">{coverTitle}</h1>
            {coverText || <SearchBar />}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

Cover.propTypes = {
  coverImage: PropTypes.string,
  coverTitle: PropTypes.string,
  coverText: PropTypes.string,
};

export default Cover;
