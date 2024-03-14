import PropTypes from "prop-types";
import { Input, Button, Card, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";

const SearchBar = ({ searchList, setSearchItems }) => {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // for search suggestions
  const searchNames = searchList.map((item) => {
    return { _id: item._id, name: item.name };
  });

  let suggestions = searchNames.filter((menuItem) => {
    if (!text) return false;
    return menuItem.name.toLowerCase().includes(text.toLowerCase());
  });

  const handleSearch = () => {
    const searchedItems = searchList.filter((menuItem) =>
      suggestions.find((suggestion) => suggestion._id === menuItem._id)
    );
    setSearchItems(searchedItems);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    suggestions = [];
    setText("");
    handleSearch();
  };

  return (
    <>
      <div className="relative w-full max-w-[24rem]">
        <Input
          type="text"
          value={text}
          label={
            !suggestions.length && text
              ? "Search result not found..."
              : "Type here..."
          }
          onChange={({ target }) => {
            setText(target.value);
            setShowSuggestions(true);
            if (!target.value) handleClear();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          error={!suggestions.length && text ? true : false}
          color="white"
          className="pr-20 text-white"
          containerProps={{
            className: "min-w-0",
          }}
        />

        <Button
          onClick={handleClear}
          size="sm"
          color="gray"
          className={`!absolute px-2 py-1 right-24 top-2 rounded ${
            text && suggestions.length ? "visible" : "invisible"
          }`}
        >
          X
        </Button>
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

      {/* search suggestions */}
      {suggestions.length && showSuggestions ? (
        <div className="w-full max-w-[24rem]">
          <Card className="bg-inherit border max-h-60 overflow-y-auto">
            <List className="text-white">
              {suggestions.map((item) => (
                <ListItem
                  key={item._id}
                  onClick={() => {
                    setText(item.name);
                    setSearchItems(
                      searchList.filter(
                        (menuItem) => menuItem.name === item.name
                      )
                    );
                    setShowSuggestions(false);
                  }}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
      ) : null}
    </>
  );
};

SearchBar.propTypes = {
  searchList: PropTypes.array.isRequired,
  setSearchItems: PropTypes.func.isRequired,
};

export default SearchBar;
