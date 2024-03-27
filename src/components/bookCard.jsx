import locationIcon from "../assets/icons/location.svg";
import publisherIcon from "../assets/icons/publisher.svg";
import pageIcon from "../assets/icons/page.svg";
import { Link } from "react-router-dom";

const bookCard = ({ book }) => {
  return (
    <div className="border-2 border-[#13131326] p-6 rounded-lg flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-40 py-6 flex justify-center bg-[#1313130D] rounded-lg">
        <img
          src={`/images/${book["image"]}`}
          alt={book["bookName"] + " - Image"}
          className="w-24 md:w-[70%]"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="font-playfair font-bold text-2xl mb-2.5">
          {book["bookName"]}
        </h3>
        <p className="text-[#131313CC] text-lg pb-2.5 mb-3 border-b border-[#13131326] font-semibold">
          By: {book["author"]}
        </p>

        <div className="flex flex-wrap items-center mb-4">
          {/* Tags */}
          <div className="flex items-center gap-2 mr-3">
            <span className="font-bold">Tag:</span>
            {book["tags"].map((tag, idx) => (
              <p
                key={idx}
                className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 font-semibold rounded-2xl"
              >
                #{tag}
              </p>
            ))}
          </div>

          <div className="flex gap-2 items-center text-[#131313CC]">
            <img src={locationIcon} alt="Icon" />
            <p>Year of Publishing: {book["yearOfPublishing"]}</p>
          </div>
        </div>

        <div className="text-[#131313CC] flex flex-wrap items-center gap-4 *:flex *:gap-2.5 *:items-center pb-2.5 mb-3 border-b border-[#13131326]">
          <p>
            <img src={publisherIcon} alt="Publisher Icon" />
            Publisher: {book["publisher"]}
          </p>

          <p>
            <img src={pageIcon} alt="Page Icon" />
            Pages: {book["totalPages"]}
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly md:justify-start gap-3 *:px-4 *:py-2 *:rounded-full">
          <p className="text-[#328EFF] bg-[#328EFF26]">
            Category: {book["category"]}
          </p>
          <p className="text-[#FFAC33] bg-[#FFAC3326]">
            Rating: {book["rating"]}
          </p>
          <Link
            to={`/books/${book["bookId"]}`}
            className="text-white bg-[#23BE0A] hover:bg-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default bookCard;
