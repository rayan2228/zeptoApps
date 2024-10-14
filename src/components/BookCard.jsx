import { Link } from "react-router-dom";
import Flex from "./ui/Flex";

const BookCard = ({ book }) => {
  console.log(book);

  return (
    <div className="relative w-[24%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Flex className="items-center justify-center w-full border-b border-b-slate-300 h-1/2">
        <Link to={`/books/${book.id}`} className="h-[90%]" >
          {" "}
          <img
            className=" h-[90%] object-contain rounded-md"
            src={book?.formats["image/jpeg"]}
            alt
          />
        </Link>
      </Flex>
      <div className="p-5">
        <Link to={`/books/${book.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title.slice(0, 50) + " ..."}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Flex className={"absolute bottom-5"}>
          <Link
            to={`/books/${book.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </Flex>
      </div>
    </div>
  );
};
export default BookCard;
