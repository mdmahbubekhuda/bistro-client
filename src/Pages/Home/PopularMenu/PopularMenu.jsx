import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  return (
    <section className="mb-8">
      <MenuItems
        heading={"from our menu"}
        subHeading={"popular items"}
        menuCategory="popular"
      />
    </section>
  );
};

export default PopularMenu;
