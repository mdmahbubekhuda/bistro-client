import PropTypes from "prop-types";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import Cover from "../../../components/Cover/Cover";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const MenuItems = ({
  coverImage,
  coverTitle,
  coverText,
  heading,
  subHeading,
  menuCategory,
}) => {
  const { menu } = useMenu();
  const filteredByCategory = menu.filter(
    (item) => item.category === menuCategory
  );

  return (
    <>
      {coverImage && (
        <Cover
          coverImage={coverImage}
          coverTitle={coverTitle}
          coverText={coverText}
        />
      )}
      {(heading || subHeading) && (
        <SectionTitle heading={heading} subHeading={subHeading} />
      )}
      <div className="grid md:grid-cols-2 gap-8 px-4">
        {filteredByCategory.slice(0, 4).map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="w-full text-center">
        <Link to={"menu?category=popular"}>
          <button className="btn btn-outline border-0 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </>
  );
};

MenuItems.propTypes = {
  coverImage: PropTypes.string,
  coverTitle: PropTypes.string,
  coverText: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  menuCategory: PropTypes.string,
};

export default MenuItems;
