import Image from "../ui/Image";
import Flex from "../ui/Flex";
import bookPlaceholder from "../../assets/bookPlaceholder.png";
const BookDetailsCard = ({ book }) => {
  return (
    <Flex className="flex-col mb-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Flex className="items-center justify-center w-1/4 ">
        <Image
          className="object-contain w-[90%] h-[90%] rounded-md "
          src={book?.formats["image/jpeg"] || bookPlaceholder}
          alt={book.title}
        />
      </Flex>
      <Flex className="flex-col justify-between flex-grow p-4 leading-normal">
        <h5 className="title">{book?.title}</h5>
        <h5 className="title">
          Author : <span className="details">{book?.authors[0]?.name}</span>
        </h5>
        <h5 className="title">
          downloads : <span className="details">{book?.download_count}</span>
        </h5>
        <h5 className="title">
          languages : <span className="details">{book?.languages}</span>
        </h5>
        <Flex>
          <ul className="w-2/5 ">
            <h5 className="title">Book Subjects :</h5>
            {book?.subjects?.map((subject, index) => (
              <li className="details" key={index}>
                {subject}
              </li>
            ))}
          </ul>
          <ul className="w-2/5 ">
            <h5 className="title">bookshelves :</h5>
            {book?.bookshelves?.map((bookshelf, index) => (
              <li className="details" key={index}>
                {bookshelf}
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default BookDetailsCard;
