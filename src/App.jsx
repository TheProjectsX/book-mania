import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BooksContext from "./utils/context";
import { useEffect, useState } from "react";

// React Toastify
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [readBooksList, setReadBooksList] = useState([]);
  const [wishList, setWishList] = useState([]);

  // Add to Read Books
  const addToReadBooks = (book) => {
    const added = readBooksList.find((item) => item.bookId === book["bookId"]);
    if (added) {
      toast.error("Book Already Added to Read Book!");
      return;
    }

    const wishListNew = wishList.filter(
      (item) => item.bookId !== book["bookId"]
    );
    const readBooksNew = [...readBooksList, book];

    setWishList(wishListNew);
    setReadBooksList(readBooksNew);
    toast.success("Added to Read Book List");

    localStorage.setItem("wishList", JSON.stringify(wishListNew));
    localStorage.setItem("readBooksList", JSON.stringify(readBooksNew));
  };

  // Add to Wish List
  const addToWishList = (book) => {
    const addedToRead = readBooksList.find(
      (item) => item.bookId === book["bookId"]
    );
    const addedToWish = wishList.find((item) => item.bookId === book["bookId"]);
    if (addedToRead) {
      toast.error("Book Already Added to Read Book!");
      return;
    } else if (addedToWish) {
      toast.error("Book Already Added to Wishlist!");
      return;
    }

    const wishListNew = [...readBooksList, book];
    setWishList(wishListNew);
    toast.success("Added to Read Wish List");

    localStorage.setItem("wishList", JSON.stringify(wishListNew));
  };

  // Load Data from LocalStorage
  useEffect(() => {
    const oldReadBooks =
      JSON.parse(localStorage.getItem("readBooksList")) ?? [];
    const oldWishList = JSON.parse(localStorage.getItem("wishList")) ?? [];

    setReadBooksList(oldReadBooks);
    setWishList(oldWishList);
  }, []);

  return (
    <div className="font-work-sans max-w-[1100px] mx-auto px-5">
      <ToastContainer
        position="top-left"
        autoClose={2999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Navbar />
      <BooksContext.Provider
        value={{ readBooksList, addToReadBooks, wishList, addToWishList }}
      >
        <Outlet />
      </BooksContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
