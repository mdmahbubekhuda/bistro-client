import Cover from "../../components/Cover/Cover";
import coverImage from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";

const Order = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = menu
    .map((item) => item.category)
    .filter((value, idx, currentValue) => currentValue.indexOf(value) === idx);

  return (
    <div>
      <Cover coverImage={coverImage} coverTitle={"place order"} />
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
    </div>
  );
};

export default Order;
