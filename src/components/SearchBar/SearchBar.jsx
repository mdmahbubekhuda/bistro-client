import PropTypes from "prop-types";
import {
  Input,
  Button,
  Card,
  List,
  ListItem,
  ThemeProvider,
} from "@material-tailwind/react";
import { useState } from "react";

let suggestions = [];

const SearchBar = ({ menu, setSearchItems }) => {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // for search suggestions
  const menuNames = menu.map((item) => {
    return { _id: item._id, name: item.name };
  });

  const onChange = (searchText) => {
    suggestions = menuNames.filter((item) => {
      if (!searchText) return false;
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if (searchText && suggestions.length) setShowSuggestions(true);
    else setShowSuggestions(false);

    if (!searchText) handleSearch();
  };

  const handleSearch = () => {
    setShowSuggestions(false);

    const searchedItems = menu.filter((item) =>
      suggestions.find((suggestion) => suggestion._id === item._id)
    );
    setSearchItems(searchedItems);
  };

  const handleClear = () => {
    suggestions = [];
    setText("");
    handleSearch();
  };

  const customStyle = {
    input: {
      styles: {
        variants: {
          outlined: {
            error: {
              input: {
                color: "text-white",
              },
            },
          },
        },
      },
    },
  };

  return (
    <>
      <div className="relative w-full max-w-[24rem]">
        <ThemeProvider value={customStyle}>
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
              onChange(target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            error={!suggestions.length && text ? true : false}
            color="white"
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
        </ThemeProvider>

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

      <div className="w-full max-w-[24rem]">
        <Card
          className={`bg-inherit border max-h-60 overflow-y-auto ${
            showSuggestions ? "visible" : "invisible"
          } `}
        >
          <List className="text-white">
            {suggestions.map((item) => (
              <ListItem
                key={item._id}
                onClick={() => {
                  setText(item.name);
                  onChange(item.name);
                  handleSearch();
                }}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </>
  );
};

SearchBar.propTypes = {
  menu: PropTypes.array,
  setSearchItems: PropTypes.func,
};

export default SearchBar;
