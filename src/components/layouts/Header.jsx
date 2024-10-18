import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import heartIcon from "../../assets/icons/heart.svg";
import heartFillIcon from "../../assets/icons/heartFill.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SearchModal from "../modal/SearchModal";
import { toggleTheme } from "../../redux/slices/themeModeSlice";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const wishlists = useSelector((state) => state.wishlistSlice.items);
  const themeMode = useSelector((state) => state.themeModeSlice.theme);
  console.log(themeMode);
  
  const handleChangeTheme = () => {
    if (themeMode === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };

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

          <Flex className="items-center gap-5 text-gray-500 dark:text-white ">
            <Link to={"/wishlists"} className={"flex items-center gap-3"}>
              <img
                src={wishlists.length ? heartFillIcon : heartIcon}
                alt="heartIcon"
                className="w-6 h-6 "
              />
              <span>Wishlist</span>
            </Link>
            <button onClick={() => openModal()}>
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
            </button>

            <button className="w-6 h-6" onClick={() => handleChangeTheme()}>
              <svg
                className="block fill-violet-700 dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg
                className="hidden fill-yellow-500 dark:block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isModalOpen && <SearchModal onclose={() => closeModal()} />}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};
export default Header;
