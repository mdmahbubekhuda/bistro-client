import Cover from "../../components/Cover/Cover";
import MenuItems from "../Shared/MenuItems/MenuItems";
import coverImage from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  return (
    <div className="space-y-8 mb-12">
      <Cover coverImage={coverImage} coverTitle={"our menu"} />

      {/* todays offer */}
      <MenuItems
        heading="today's offer"
        subHeading="don't miss out"
        menuCategory="offered"
      />

      {/* pizza */}
      <MenuItems
        menuCategory="pizza"
        coverImage={pizzaImg}
        coverTitle={"pizza"}
      />

      {/* salad */}
      <MenuItems
        menuCategory={"salad"}
        coverImage={saladImg}
        coverTitle={"salad"}
      />

      {/* soup */}
      <MenuItems
        menuCategory={"soup"}
        coverImage={soupImg}
        coverTitle={"soup"}
      />

      {/* dessert */}
      <MenuItems
        menuCategory={"dessert"}
        coverImage={dessertImg}
        coverTitle={"dessert"}
      />
    </div>
  );
};

export default Menu;
