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
  const { readBooksList, setReadBooksList, wishList, setWishList } = context;
  const [sortBy, setSortBy] = useState("rating");

  const [filteredReadBooks, setFilteredReadBooks] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState([]);

  // Load Data from LocalStorage
  useEffect(() => {
    if (readBooksList.length !== 0 || wishList.length !== 0) {
      return;
    }

    const oldReadBooks =
      JSON.parse(localStorage.getItem("readBooksList")) ?? [];
    const oldWishList = JSON.parse(localStorage.getItem("wishList")) ?? [];

    setReadBooksList(oldReadBooks);
    setWishList(oldWishList);
  }, []);

  useEffect(() => {
    setFilteredReadBooks(
      [...readBooksList].sort((a, b) => b[sortBy] - a[sortBy])
    );

    setFilteredWishList([...wishList].sort((a, b) => b[sortBy] - a[sortBy]));
  }, [readBooksList, wishList]);

  // Sort Books by selected
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
          value={sortBy}
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
            {filteredReadBooks.length > 0 ? (
              filteredReadBooks.map((book) => (
                <BookCard book={book} key={book["bookId"]} />
              ))
            ) : (
              <h4 className="text-xl italic my-10">
                No Listed Books Available!
              </h4>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4">
            {filteredWishList.length > 0 ? (
              filteredWishList.map((book) => (
                <BookCard book={book} key={book["bookId"]} />
              ))
            ) : (
              <h4 className="text-xl italic my-10">
                No Wish List Books Available!
              </h4>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
