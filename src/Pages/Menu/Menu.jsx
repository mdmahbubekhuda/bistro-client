import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import TabComp from "../../components/TabComp/TabComp";

const Menu = () => {
  const { menu, menuCategories } = useMenu();
  const [searchItems, setSearchItems] = useState([]);

  console.log(searchItems);

  return (
    <>
      <Cover
        menu={menu}
        setSearchItems={setSearchItems}
        coverImage={coverImage}
        coverTitle={"search our menu"}
      />
      <div className="my-2">
        <TabComp
          tabs={menuCategories}
          defaultTab="dessert"
          tabContents={menu}
        />
      </div>
    </>
  );
};

export default Menu;
