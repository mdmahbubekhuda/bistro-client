import Cover from "../Shared/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Cover coverImage={coverImage} coverTitle={"our menu"} coverText={""} />
    </div>
  );
};

export default Menu;
