import { useContext, useEffect } from "react";
import BooksContext from "../utils/context";
import { Link } from "react-router-dom";

const ReadingTimeline = () => {
  const context = useContext(BooksContext);
  const { timelineData, setTimelineData } = context;

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleString("en-US");

    // Extracting parts of the formatted date
    const [fullDate, fullTimePeriod] = formattedDate.split(", ");
    const [fullTime, period] = fullTimePeriod.split(" ");
    const [day, month, year] = fullDate.split("/");
    const [hour, minutes] = fullTime.split(":");

    // Adjusting the month and year to fit the format
    const formattedMonth = month.length === 1 ? `0${month}` : month;
    const formattedYear = year.length === 4 ? year : `20${year}`;

    // Combining parts into desired format
    const formattedDateTime = `${day}/${formattedMonth}/${formattedYear} ${hour}:${minutes} ${period}`;
    return formattedDateTime;
  };

  useEffect(() => {
    if (timelineData.length !== 0) {
      return;
    }

    const oldTimelineData =
      JSON.parse(localStorage.getItem("timelineData")) ?? [];
    setTimelineData(oldTimelineData.reverse());
  }, []);

  return (
    <div className="mb-16">
      <h3 className="mb-10 p-6 rounded-lg bg-[#1313130D] text-3xl text-center font-bold font-playfair">
        Your Reading Timeline
      </h3>

      {/* Timeline Data */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL.
              </th>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Pages
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Date - Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Visit
              </th>
            </tr>
          </thead>
          <tbody>
            {timelineData.map((item, idx) => {
              return (
                <tr
                  key={idx}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {timelineData.length - idx}
                  </th>
                  <td className="px-6 py-4">{item["bookName"]}</td>
                  <td className="px-6 py-4">{item["totalPages"]}</td>
                  <td className="px-6 py-4">{item["category"]}</td>
                  <td className="px-6 py-4">{formatDate(item["time"])}</td>
                  <td className="px-6 py-4">
                    {item["type"] === "readList"
                      ? "Added to Read List"
                      : "Added to Wish List"}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/books/${item["bookId"]}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadingTimeline;
