import { useGetAllBooksQuery } from "../redux/slices/apiSlice";
import BookCard from "./BookCard";
import CardLoading from "./ui/CardLoading";
import ErrorMessage from "./ui/ErrorMessage";
import Flex from "./ui/Flex";
let fakeArr = Array(8).fill(null);
let content;
const BooksContainer = () => {
  const { data: books, isLoading, isError,error } = useGetAllBooksQuery();

  if (isLoading)
    content = fakeArr.map((_, index) => <CardLoading key={index} />);
  if (!isLoading && isError) content = <ErrorMessage title={error.status} message={error?.error}/>;

  if (!isLoading && !isError && books?.results?.length)
    content = books?.results?.map((book) => (
      <BookCard key={book.id} book={book} />
    ));
  return <Flex className={"my-5 flex-wrap gap-5 "}>{content}</Flex>;
};
export default BooksContainer;
