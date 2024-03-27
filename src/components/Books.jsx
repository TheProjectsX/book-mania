import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BooksContext from "../utils/context";

const Books = () => {
  const params = useParams();
  const bookId = params.bookId;
  const booksData = useLoaderData();
  const book = booksData.find((book) => book.bookId === bookId);

  const context = useContext(BooksContext);
  const { addToReadBooks, addToWishList } = context;

  return (
    <div className="mb-16">
      <h3 className="mb-10 p-6 rounded-lg bg-[#1313130D] text-3xl text-center font-bold font-playfair">
        Book Details
      </h3>

      {book ? (
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex justify-center p-10 bg-[#1313130D] md:w-full">
            <img
              src={`/images/${book["image"]}`}
              alt={book["bookName"] + " - Image"}
              className="w-56"
            />
          </div>
          <div>
            <h3 className="font-playfair font-bold text-4xl mb-4">
              {book["bookName"]}
            </h3>
            <p className="text-[#131313CC] text-lg pb-2.5 mb-3 border-b border-[#13131326] font-semibold">
              By: {book["author"]}
            </p>
            <p className="text-[#131313CC] text-lg pb-2.5 mb-3 border-b border-[#13131326] font-semibold">
              {book["category"]}
            </p>
            <p className="mb-5">
              <span className="font-bold">Review: </span> {book["review"]}
            </p>

            {/* Tags */}
            <div className="flex items-center gap-3 pb-2.5 mb-3 border-b border-[#13131326]">
              <span className="font-bold">Tag</span>
              {book["tags"].map((tag, idx) => (
                <p
                  key={idx}
                  className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 font-semibold rounded-2xl"
                >
                  #{tag}
                </p>
              ))}
            </div>

            <table className="mb-4">
              <tbody>
                <tr>
                  <td className="pb-1 pr-10 text-[#131313B3]">
                    Number of Pages:
                  </td>
                  <td className="font-semibold">{book["totalPages"]}</td>
                </tr>
                <tr>
                  <td className="pb-1 text-[#131313B3]">Publisher:</td>
                  <td className="font-semibold">{book["publisher"]}</td>
                </tr>
                <tr>
                  <td className="pb-1 text-[#131313B3]">Year of Publishing:</td>
                  <td className="font-semibold">{book["yearOfPublishing"]}</td>
                </tr>
                <tr>
                  <td className="pb-1 text-[#131313B3]">Rating:</td>
                  <td className="font-semibold">{book["rating"]}</td>
                </tr>
              </tbody>
            </table>

            <div className="space-x-4">
              <button
                className="p-5 font-semibold px-4 py-2.5 border-2 border-[#1313134D] hover:border-[#50B1C9] rounded-lg hover:text-white hover:bg-[#50B1C9]"
                onClick={() => addToReadBooks(book)}
              >
                Read
              </button>
              <button
                className="p-5 font-semibold px-4 py-2.5 border-2 border-[#50B1C9] hover:border-[#1313134D] rounded-lg text-white hover:text-black bg-[#50B1C9] hover:bg-white"
                onClick={() => addToWishList(book)}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-4xl my-6 text-red-500">
          Wrong Book ID: {bookId}
        </div>
      )}
    </div>
  );
};

export default Books;
