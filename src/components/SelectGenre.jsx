import { useDispatch } from "react-redux";
import { topicChange } from "../redux/slices/genreSlice";

const genres = [
  "choose an option",
  "Fiction",
  "Mystery",
  "Novel",
  "Narrative",
  "Historical Fiction",
  "Non-fiction",
  "Science fiction",
  "Thriller",
  "Genre fiction",
  "Young adult literature",
  "Literary fiction",
  "Horror fiction",
  "Historical fantasy",
  "Memoir",
  "Graphic novel",
  "Romance novel",
  "Fantasy Fiction",
  "Biography",
  "Short Story",
  "Women's fiction",
  "Children's literature",
  "History",
  "Essay",
  "Self-help book",
  "Fantasy",
  "True crime",
  "Science",
  "Travel literature",
  "Humor",
  "Contemporary romance",
  "Autobiography",
  "Poetry",
  "Social science",
  "Adventure fiction",
  "Magical Realism",
  "High fantasy",
  "Contemporary literature",
  "Western fiction",
  "Historical romance",
  "New adult fiction",
  "Action fiction",
  "Romance",
  "Crime Fiction",
  "Fairy tale",
  "Satire",
  "Speculative fiction",
  "Alternate history",
  "Detective fiction",
  "Non-fiction novel",
  "Science fantasy",
  "Review",
];
const SelectGenre = () => {
  const dispatch = useDispatch();
  return (
    <form className="my-5 max-w-56">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an topic
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => dispatch(topicChange(e.target.value))}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre.toLowerCase()}>
            {genre}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SelectGenre;
