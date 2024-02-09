import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 text-center my-12 mx-auto">
      {subHeading && (
        <p className="pb-2 capitalize bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-700 italic">
          --- {subHeading} ---
        </p>
      )}
      {heading && (
        <h3 className="border-y-2 py-2 text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
          {heading}
        </h3>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
