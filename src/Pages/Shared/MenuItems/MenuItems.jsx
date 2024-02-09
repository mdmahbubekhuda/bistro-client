import PropTypes from "prop-types";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "./MenuItem";
import Cover from "../../../components/Cover/Cover";
import { Link } from "react-router-dom";

const MenuItems = ({
  coverImage,
  coverTitle,
  coverText,
  heading,
  subHeading,
  menuCategory,
}) => {
  const [menu] = useMenu();
  const filteredMenu = menu.filter((item) => item.category === menuCategory);
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
        {filteredMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="w-full text-center">
        <Link to={`/order/${menuCategory}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
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
