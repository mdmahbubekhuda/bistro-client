import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const [tabs, setTabs] = useState([]);
  const { category } = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const filteredTabNames = menu
      .map((item) => item.category)
      .filter((value, idx, currentValue) => currentValue.indexOf(value) === idx)
      .sort();

    setTabs(filteredTabNames);
    setTabIndex(filteredTabNames.indexOf(category));
  }, [menu, category]);

  return (
    <div>
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
              <div className="grid md:grid-cols-3 gap-12">
                {menu
                  .filter((item) => item.category === tab)
                  .map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default Order;
