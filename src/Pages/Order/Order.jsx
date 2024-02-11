import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
import FoodCategoryTab from "./FoodCategoryTab/FoodCategoryTab";

const Order = () => {
  const [tabs, setTabs] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();

  useEffect(() => {
    const filteredTabNames = menu
      .map((item) => item.category)
      .filter((value, idx, currentValue) => currentValue.indexOf(value) === idx)
      .sort();

    setTabs(filteredTabNames);
    setTabIndex(filteredTabNames.indexOf(category));
  }, [menu, category]);

  return (
    <div className="mb-8">
      <Cover coverImage={coverImage} coverTitle={"place order"} />

      {tabs.length && (
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {tabs.map((tab, idx) => (
              <Tab key={idx}>{tab.toUpperCase()}</Tab>
            ))}
          </TabList>
          {tabs.map((tab, idx) => (
            <TabPanel key={idx}>
              <FoodCategoryTab
                foodItems={menu.filter((item) => item.category === tab)}
              />
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default Order;
