import Footer from "./Footer";
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <div className=" max-w-[1100px] mx-auto px-5">
      <Navbar />
      <div className="my-40 text-center">
        <h3 className="font-playfair font-semibold text-4xl mb-6">
          404 Not Found!
        </h3>
        <p className="italic text-gray-600 text-xl">
          The Page you are Looking for Could not be Found!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
