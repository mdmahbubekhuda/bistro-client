import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import { useState } from "react";
import TabComp from "../../components/TabComp/TabComp";
import useMenu from "../../hooks/useMenu";
import { useSearchParams } from "react-router-dom";

const Menu = () => {
  const { menu, menuCategories } = useMenu();
  const [searchItems, setSearchItems] = useState([]);
  const [searchParams] = useSearchParams();

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
          key={searchItems.length}
          tabs={searchItems.length ? ["Your Search Results"] : menuCategories}
          defaultTab={
            searchItems.length
              ? "Your Search Results"
              : searchParams.get("category")
              ? searchParams.get("category")
              : "dessert"
          }
          tabContents={searchItems.length ? searchItems : menu}
        />
      </div>
    </>
  );
};

export default Menu;
