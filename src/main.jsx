import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Books from "./components/Books.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
import BookPagesChart from "./components/BookPagesChart.jsx";
import ReadingTimeline from "./components/ReadingTimeline.jsx";
import SearchBooks from "./components/SearchBooks.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data/books-data.json"),
      },
      {
        path: "/books/:bookId",
        element: <Books />,
        loader: () => fetch("/data/books-data.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/read-pages",
        element: <BookPagesChart />,
      },
      {
        path: "/timeline",
        element: <ReadingTimeline />,
      },
      {
        path: "/search",
        element: <SearchBooks />,
        loader: () => fetch("/data/books-data.json"),
      },
    ],
  },
]);

export const pageTitles = {
  "": "Book Mania",
  books: "Book Mania | Book Details",
  "listed-books": "Book Mania | Listed Books",
  "read-pages": "Book Mania | Read Pages",
  timeline: "Book Mania | Reading Timeline",
  search: "Book Mania | Search for Books",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
