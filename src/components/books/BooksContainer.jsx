import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../../redux/slices/apiSlice";
import BookCard from "./BookCard";
import CardLoading from "../ui/CardLoading";
import ErrorMessage from "../ui/ErrorMessage";
import Flex from "../ui/Flex";
import Pagination from "../ui/Pagination";

let fakeArr = Array(8).fill(null);
let content;
const BooksContainer = () => {
  const currentPage = useSelector((state) => state.paginationSlice.page);
  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useGetAllBooksQuery(currentPage);

  if (isLoading)
    content = fakeArr.map((_, index) => <CardLoading key={index} />);
  if (!isLoading && isError)
    content = <ErrorMessage title={error.status} message={error?.error} />;

  if (!isLoading && !isError && books?.results?.length === 0)
    content = (
      <ErrorMessage title={"not Found :"} message={"no book in the database"} />
    );
  if (!isLoading && !isError && books?.results?.length)
    content = books?.results?.map((book) => (
      <BookCard key={book.id} book={book} />
    ));
  return (
    <Flex className={"my-5 flex-wrap gap-5 justify-center"}>
      {content}
      {books?.results?.length && <Pagination total={books?.count} />}
    </Flex>
  );
};
export default BooksContainer;
