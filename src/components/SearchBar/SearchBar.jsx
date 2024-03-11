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

const SearchBar = ({ menu, setSearchItems }) => {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (searchText) => {
    setText(searchText);
    setShowSuggestions(true);

    const suggestionsByName = menu.filter((item) => {
      if (!searchText) return false;
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setSuggestions(suggestionsByName);

    if (!searchText || !suggestionsByName.length) setShowSuggestions(false);
  };

  const handleSearch = () => {
    setShowSuggestions(false);
    setSearchItems(suggestions);
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
            onChange={({ target }) => onChange(target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            error={!suggestions.length && text}
            color="white"
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
        </ThemeProvider>

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
      <div className="w-full max-w-[24rem]">
        <Card
          className={`bg-inherit border max-h-60 ${
            showSuggestions ? "visible" : "invisible"
          } `}
        >
          <List className="text-white overflow-y-auto">
            {suggestions.map((item) => (
              <ListItem
                key={item._id}
                onClick={() => {
                  setText(item.name);
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
