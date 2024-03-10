import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    console.log(text);
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Type here..."
        value={text}
        onChange={({ target }) => setText(target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
        color="white"
      />
      <Button
        onClick={handleSearch}
        size="sm"
        color={text ? "gray" : "blue-gray"}
        disabled={!text}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
