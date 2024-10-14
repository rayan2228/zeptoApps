import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
let navList = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "wishlist",
    link: "/wishlist",
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
          <Flex className="md:order-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
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
