import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import FoodCard from "../../components/FoodCard/FoodCard";

const Menu = () => {
  const { menu, menuCategories } = useMenu();
  const [searchItems, setSearchItems] = useState([]);
  const [activeTab, setActiveTab] = useState("dessert");

  console.log(searchItems);

  return (
    <>
      <Cover
        menu={menu}
        setSearchItems={setSearchItems}
        coverImage={coverImage}
        coverTitle={"search our menu"}
      />
      <div className="mt-20">
        <Tabs value={activeTab}>
          <TabsHeader>
            {menuCategories.map((cat) => (
              <Tab key={cat} value={cat} onClick={() => setActiveTab(cat)}>
                {cat.toUpperCase()}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="grid grid-cols-3">
            {menu.map((foodItem) => (
              <TabPanel
                key={foodItem.category}
                value={foodItem.category}
                className="flex place-content-center w-full h-full"
              >
                <FoodCard foodItem={foodItem} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Menu;
