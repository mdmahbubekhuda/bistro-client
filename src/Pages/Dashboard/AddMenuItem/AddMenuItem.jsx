import Form from "../../../components/Form/Form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const AddMenuItem = () => {
  const [menu, refetch] = useMenu();
  const categories = menu
    .map((category) => category.category)
    .filter((item, idx, arr) => arr.indexOf(item) === idx);

  return (
    <div>
      <SectionTitle heading={"menu"} subHeading={"add an item"} />
      <Form categories={categories} />
    </div>
  );
};

export default AddMenuItem;
