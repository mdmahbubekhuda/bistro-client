import PropTypes from "prop-types";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardFooter,
  Badge,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Form = ({ categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Card color="transparent" shadow={true} className="mb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="grid grid-cols-2 gap-4 max-w-screen-lg ">
          <div className="col-span-2 mb-1 flex flex-col gap-6">
            <Input
              {...register("name", { required: "Title required *" })}
              size="lg"
              label={errors.name ? errors.name.message : "Title"}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6 relative">
            <select
              {...register("category", { required: "Must select one *" })}
              className="select w-full capitalize border-blue-gray-200 border-1 rounded-md focus:outline-0 "
              defaultValue=""
            >
              <option value="" disabled>
                {errors.category ? errors.category.message : "Select Category"}
              </option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              {...register("price", { required: "Price required *" })}
              size="lg"
              type="number"
              label={errors.price ? errors.price.message : "Price"}
            />
          </div>
          <div className="col-span-2 mb-1 flex flex-col gap-6">
            <Textarea
              {...register("recipe", { required: "Recipe required *" })}
              size="lg"
              label={errors.recipe ? errors.recipe.message : "Recipe Details"}
            />
          </div>
        </CardBody>

        <CardFooter className="flex justify-between relative">
          {errors.photo && (
            <span className="absolute -top-[10%]">{errors.photo.message}</span>
          )}
          <input
            {...register("photo", { required: "Upload image here *" })}
            type="file"
            className="file-input w-full max-w-xs border-blue-gray-200 border-1 rounded-md focus:outline-0"
            accept="image/*"
          />
          <Badge
            content={
              <PlusIcon className="h-4 w-4 text-white" strokeWidth={3} />
            }
            withBorder
          >
            <Button type="submit" variant="gradient">
              Add item
            </Button>
          </Badge>
        </CardFooter>
      </form>
    </Card>
  );
};

Form.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Form;
