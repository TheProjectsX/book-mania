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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
