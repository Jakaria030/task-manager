import { useState } from "react";
import useTheme from "../hooks/useTheme.js";
import { debounce, handleSetSearchTerm } from "../utils/utils.js";

const dSetSearchTerm = debounce(handleSetSearchTerm, 500);

const SearchBox = ({ searchTerm, onSetSearchTerm }) => {
    const { theme } = useTheme();
    const [searchText, setSearchText] = useState(searchTerm);

    const handleChangeText = (e) => {
        setSearchText(e.target.value);
        dSetSearchTerm(onSetSearchTerm, e.target.value);
    }

    return (
        <div className="my-12 flex items-center justify-between gap-4">
            <h2 className={`${theme === "light" ? "text-gray-800" : "text-white"} text-2xl font-bold`}>All Tasks:</h2>
            <input onChange={handleChangeText} className={`${theme === "light" ? "text-gray-800 border-gray-200 focus:outline focus:outline-violet-500" : "text-white"} border rounded-md p-2 `} value={searchText} type="search" placeholder="Search todos" />
        </div>
    )
};

export default SearchBox;