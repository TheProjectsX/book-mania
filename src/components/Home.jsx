import { Link, useLoaderData } from "react-router-dom";
import starIcon from "../assets/icons/star.svg";

const Home = () => {
  const booksData = useLoaderData();

  return (
    <div className="mb-16">
      <header className="bg-[#1313130D] flex flex-col md:flex-row gap-7 items-center justify-between p-6 md:p-20 rounded-lg mb-16">
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-playfair mb-5 leading-snug">
            Books to Freshen
            <br /> up your Bookshelf
          </h3>
          <Link to={"/listed-books"}>
            <button className="py-2.5 px-4 rounded-md bg-[#23BE0A] text-white font-semibold">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img src="/images/book_1.jpg" alt="Book" className="w-40" />
        </div>
      </header>

      {/* Books Data */}
      <div>
        <h3 className="mb-10 text-4xl text-center font-bold font-playfair">
          Books
        </h3>

        <div className="flex flex-wrap justify-evenly gap-6">
          {booksData.map((book, idx) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
