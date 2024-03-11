import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";

const Menu = () => {
  const { menu } = useMenu();
  const [searchItmes, setSearchItems] = useState([]);

  console.log(searchItmes);

  return (
    <div className="space-y-8 mb-12">
      <Cover
        menu={menu}
        setSearchItems={setSearchItems}
        coverImage={coverImage}
        coverTitle={"search our menu"}
      />
    </div>
  );
};

export default Menu;
