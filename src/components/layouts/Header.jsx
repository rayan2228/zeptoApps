import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import heartIcon from "../../assets/icons/heart.svg";
import heartFillIcon from "../../assets/icons/heartFill.svg";
import { useSelector } from "react-redux";
let navList = [
  {
    name: "home",
    link: "/",
  },
];
const Header = () => {
  const wishlists = useSelector((state) => state.wishlistSlice.items);
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
            <Link to={"/wishlists"} className={"flex items-center gap-3"}>
              <img
                src={wishlists.length ? heartFillIcon : heartIcon}
                alt="heartIcon"
                className="w-6 h-6 "
              />
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
