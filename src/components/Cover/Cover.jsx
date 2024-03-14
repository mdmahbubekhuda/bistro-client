import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
import SearchBar from "../SearchBar/SearchBar";

const Cover = ({
  searchList,
  setSearchItems,
  coverImage,
  coverTitle,
  coverText,
}) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImage}
      strength={-200}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="grid h-[80vh]">
        {/* dark overlay */}
        <div className="col-start-1 row-start-1 z-10 bg-blue-gray-900 opacity-70"></div>
        {/* content */}
        <div className="col-start-1 row-start-1 z-20 text-white space-y-6 place-self-center w-full">
          <h1 className="text-2xl lg:text-4xl capitalize text-center">
            {coverTitle}
          </h1>
          <div className="space-y-4 h-[60vh] flex flex-col items-center px-4">
            {coverText || (
              <SearchBar
                searchList={searchList}
                setSearchItems={setSearchItems}
              />
            )}
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
  searchList: PropTypes.array,
  setSearchItems: PropTypes.func,
};

export default Cover;
