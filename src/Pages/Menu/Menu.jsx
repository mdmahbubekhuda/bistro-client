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
      <div>
        <Tabs value={activeTab}>
          <TabsHeader>
            {menuCategories.map((cat) => (
              <Tab key={cat} value={cat} onClick={() => setActiveTab(cat)}>
                {cat.toUpperCase()}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {menu.map((menu) => (
              <TabPanel key={menu.category} value={menu.category}>
                {menu.category} {menu.name}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Menu;
