import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import wishlist from "../../assets/icons/heartFill.svg";
let navList = [
  {
    name: "home",
    link: "/",
  },
];
const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <Container>
        <Flex className="flex-wrap items-center justify-between p-4 ">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <Flex className="items-center gap-5 text-white md:order-2">
            <Link to={"/wishlist"} className={"flex items-center gap-3"}>
              <svg
                className="w-6 h-6 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z"
                  fill="#f42e2e"
                />
              </svg>
              <span>Wishlist</span>
            </Link>

            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </Flex>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navList.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    to={link}
                    className="block px-3 py-2 text-gray-900 capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};
export default Header;
