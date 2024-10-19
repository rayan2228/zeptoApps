import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../../redux/slices/apiSlice";
import BookCard from "./BookCard";
import CardLoading from "../ui/CardLoading";
import ErrorMessage from "../ui/ErrorMessage";
import Flex from "../ui/Flex";
import Pagination from "../ui/Pagination";
import SelectGenre from "../SelectGenre";
let fakeArr = Array(8).fill(null);
let content;
const BooksContainer = () => {
  const currentPage = useSelector((state) => state.paginationSlice.page);
  const topic = useSelector((state) => state.genreSlice.topic);

  const {
    data: books,
    isFetching,
    isLoading,
    isError,
    error,
  } = useGetAllBooksQuery({ currentPage, topic });

  if (isLoading || isFetching)
    content = fakeArr.map((_, index) => <CardLoading key={index} />);
  if (!isLoading && isError)
    content = <ErrorMessage title={error.status} message={error?.error} />;

  if (!isLoading && !isFetching && !isError && books?.results?.length === 0)
    content = (
      <ErrorMessage title={"not Found :"} message={"no book in the database"} />
    );
  if (!isLoading && !isFetching && !isError && books?.results?.length)
    content = books?.results?.map((book) => (
      <BookCard key={book.id} book={book} />
    ));
  return (
    <>
      <SelectGenre />
      <Flex
        className={
          "my-5 flex-col flex-wrap md:flex-row gap-3 md:gap-x-0 justify-around xl:justify-start xl:gap-3"
        }
      >
        {content}
        {books?.results?.length && <Pagination total={books?.count} />}
      </Flex>
    </>
  );
};
export default BooksContainer;
