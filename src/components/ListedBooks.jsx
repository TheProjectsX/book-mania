// Dropdown
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import BookCard from "./bookCard";
import { useContext, useEffect, useState } from "react";
import BooksContext from "../utils/context";

const ListedBooks = () => {
  const context = useContext(BooksContext);
  const { readBooksList, wishList } = context;
  const [sortBy, setSortBy] = useState("rating");

  const [filteredReadBooks, setFilteredReadBooks] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState([]);

  useEffect(() => {
    setFilteredReadBooks(
      [...readBooksList].sort((a, b) => b[sortBy] - a[sortBy])
    );

    setFilteredWishList([...wishList].sort((a, b) => b[sortBy] - a[sortBy]));
  }, [sortBy]);

  return (
    <div>
      <h3 className="mb-10 p-6 rounded-lg bg-[#1313130D] text-3xl text-center font-bold font-playfair">
        Book Details
      </h3>

      <label className="mb-6 flex gap-4 flex-wrap items-center justify-center">
        <span className="font-bold">Sort By:</span>
        <Dropdown
          className="w-[200px]"
          controlClassName="!cursor-pointer"
          options={[
            { value: "rating", label: "Rating" },
            { value: "totalPages", label: "Number of Pages" },
            { value: "yearOfPublishing", label: "Published Year" },
          ]}
          onChange={(e) => setSortBy(e.value)}
          value={"rating"}
          placeholder="Select an option"
        />
      </label>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-4">
            {filteredReadBooks.map((book) => (
              <BookCard book={book} key={book["bookId"]} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4">
            {filteredWishList.map((book) => (
              <BookCard book={book} key={book["bookId"]} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
