import PropTypes from "prop-types";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{recipe}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Button>Add to Cart</Button>
        <Typography variant="h4">${price}</Typography>
      </CardFooter>
    </Card>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodCard;
