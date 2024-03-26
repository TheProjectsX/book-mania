// Dropdown
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import BookCard from "./bookCard";

const ListedBooks = () => {
  const readBooksList = [1, 2];
  const wishList = [];

  return (
    <div>
      <h3 className="mb-10 p-6 rounded-lg bg-[#1313130D] text-3xl text-center font-bold font-playfair">
        Book Details
      </h3>

      <Dropdown
        className="w-[200px] mx-auto mb-6"
        controlClassName="!cursor-pointer"
        options={[
          { value: "default", label: "Sort By", className: "!hidden" },
          { value: "rating", label: "Rating" },
          { value: "pages", label: "Number of Pages" },
          { value: "year", label: "Published Year" },
        ]}
        onChange={(e) => console.log(e.value)}
        value={"default"}
        placeholder="Select an option"
      />

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readBooksList.map((book, idx) => (
              <BookCard book={book} key={idx} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
