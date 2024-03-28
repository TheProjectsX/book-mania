import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { Link, useLoaderData } from "react-router-dom";
import starIcon from "../assets/icons/star.svg";

const SearchBooks = () => {
  const booksData = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("bookName");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  useEffect(() => {
    const filtered = booksData.filter((item) => {
      const prop = item[searchBy];
      if (typeof prop == "string") {
        return prop.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return prop.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    });

    setFilteredBooks(filtered);
  }, [searchQuery, searchBy]);

  return (
    <div>
      <h3 className="mb-10 p-6 rounded-lg bg-[#1313130D] text-3xl text-center font-bold font-playfair">
        Search for Books
      </h3>

      <div className="mb-10 flex flex-wrap justify-center gap-6 items-center">
        <label className="flex gap-4 flex-wrap items-center justify-center">
          <span className="font-bold">Search By:</span>
          <Dropdown
            className="w-[200px]"
            controlClassName="!cursor-pointer"
            options={[
              { value: "bookName", label: "Book Name" },
              { value: "author", label: "Author" },
              { value: "category", label: "Category" },
              { value: "tags", label: "Tags" },
            ]}
            onChange={(e) => setSearchBy(e.value)}
            value={searchBy}
            placeholder="Select an option"
          />
        </label>

        <input
          type="text"
          placeholder="Enter Search Query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-2 border-green-500 rounded-lg px-3 py-2"
        />
      </div>

      <div className="flex flex-wrap justify-evenly gap-6 mb-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, idx) => (
            <Link
              to={`/books/${book["bookId"]}`}
              key={idx}
              className="w-80 p-6 rounded-lg border-2 border-[#13131326]"
            >
              <div className="bg-[#F3F3F3] py-8 flex justify-center rounded-lg mb-6">
                <img
                  src={"/images/" + book["image"]}
                  alt={book["bookName"] + " - Image"}
                  className="w-20 h-[124px]"
                />
              </div>

              <div className="flex gap-3 *:bg-[#23BE0A0D] *:text-[#23BE0A] *:px-4 *:py-2 *:font-semibold *:rounded-2xl mb-4">
                {book["tags"].map((tag, idx) => (
                  <p key={idx}>{tag}</p>
                ))}
              </div>

              <h4 className="font-playfair font-bold text-2xl mb-4">
                {book["bookName"]}
              </h4>
              <p className="text-[#131313CC] text-lg pb-2.5 mb-3 border-b border-[#13131326] border-dashed font-semibold">
                By: {book["author"]}
              </p>
              <div className="text-[#131313CC] flex justify-between items-center font-semibold text-lg">
                <p>{book["category"]}</p>
                <p className="flex gap-2">
                  {book["rating"]} <img src={starIcon} alt="Ratings" />
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h4 className="text-center italic text-xl">No Books Found!</h4>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
