import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  return (
    <section className="mb-8">
      <MenuItems
        heading={"from our menu"}
        subHeading={"popular items"}
        menuCategory="popular"
      />
      <div className="w-full text-center my-4">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
