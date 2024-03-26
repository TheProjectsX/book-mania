import locationIcon from "../assets/icons/location.svg";
import publisherIcon from "../assets/icons/publisher.svg";
import pageIcon from "../assets/icons/page.svg";

const bookCard = ({ book: b }) => {
  console.log(1);
  const book = {
    bookId: "002",
    bookName: "Educated",
    author: "Tara Westover",
    image: "book_2.jpg",
    review:
      "An inspiring memoir of resilience and self-discovery. Tara Westover's journey from her isolated upbringing to academia is both harrowing and uplifting.",
    totalPages: 352,
    rating: 4.7,
    category: "Biography",
    tags: ["Memoir", "Education"],
    publisher: "Random House",
    yearOfPublishing: 2018,
  };

  return (
    <div>
      <div className="w-36 py-6 flex justify-center bg-[#1313130D] rounded-lg">
        <img
          src={`/images/${book["image"]}`}
          alt={book["bookName"] + " - Image"}
          className="w-20"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="font-playfair font-bold text-2xl mb-4">
          {book["bookName"]}
        </h3>
        <p className="text-[#131313CC] text-lg pb-2.5 mb-3 border-b border-[#13131326] font-semibold">
          By: {book["author"]}
        </p>

        <div>
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

          <div>
            <img src={locationIcon} alt="Icon" />
            <p>Year of Publishing: {book["yearOfPublishing"]}</p>
          </div>
        </div>

        <div>
          <p>
            <img src={publisherIcon} alt="Publisher Icon" />
            Publisher: {book["publisher"]}
          </p>

          <p>
            <img src={pageIcon} alt="Page Icon" />
            Pages: {book["totalPages"]}
          </p>
        </div>

        <div>
          <p>Category: {book["category"]}</p>
          <p>Rating: {book["rating"]}</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default bookCard;
