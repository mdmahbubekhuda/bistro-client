import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div className="space-y-8 mb-12">
      <Cover coverImage={coverImage} coverTitle={"search our menu"} />
    </div>
  );
};

export default Menu;
