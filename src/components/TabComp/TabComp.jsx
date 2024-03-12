import PropTypes from "prop-types";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import FoodCard from "../../components/FoodCard/FoodCard";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const TabComp = ({ tabs, defaultTab, tabContents }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  //   pagination logic
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalItemsPerTab = tabContents.filter(
    (item) => item.category === activeTab
  ).length;

  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          indicatorProps={{
            className: "bg-gradient-to-tr from-gray-900 to-gray-800",
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab}
              value={tab}
              onClick={() => {
                setActiveTab(tab);
                setActivePage(1);
              }}
              className={
                activeTab === tab ? "text-white" : "text-blue-gray-900"
              }
            >
              {tab.toUpperCase()}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="bg-blue-gray-50 mt-2 rounded-lg"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {tabs.map((tab) => (
            <TabPanel key={tab} value={tab}>
              <div className="grid grid-cols-3 gap-y-12 justify-items-center">
                {tabContents
                  .filter((item) => item.category === tab)
                  .slice(
                    activePage * itemsPerPage - itemsPerPage,
                    activePage * itemsPerPage
                  )
                  .map((foodItem) => (
                    <FoodCard key={foodItem._id} foodItem={foodItem} />
                  ))}
              </div>
              <div className="mt-12 mb-2 flex justify-center">
                <Pagination
                  totalItems={totalItemsPerTab}
                  itemsPerPage={itemsPerPage}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

TabComp.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultTab: PropTypes.string.isRequired,
  tabContents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabComp;
