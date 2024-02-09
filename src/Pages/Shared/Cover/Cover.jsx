import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ coverImage, coverTitle, coverText }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImage}
      bgImageAlt="menu"
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
            <p className="mb-5">
              {coverText ||
                "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  coverImage: PropTypes.string.isRequired,
  coverTitle: PropTypes.string.isRequired,
  coverText: PropTypes.string.isRequired,
};

export default Cover;
