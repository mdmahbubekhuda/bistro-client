import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-4">
      <img className="w-[100px] h-[100px] rounded-lg" src={image} />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-900">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
