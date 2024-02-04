import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slice/appSlice";
import {
  YOUTUBE_SEARCH_SUGGESTION_API,
  getSearchResults,
} from "../utils/youtubeApi";
import { cacheSearchResult } from "../store/slice/searchSlice";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import {
  fetchVideosByKeyWord,
  reloadTheHomePageVideos,
  updateSearchKey,
} from "../store/slice/videoListSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const navigate = useNavigate();

  const getSuggestions = async () => {
    // if (searchQuery == "") return;
    try {
      if (searchQuery in searchState) {
        let values = searchState[searchQuery];
        setSuggestions(values);
      } else {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
        const response = await data.json();
        setSuggestions(response[1]);

        dispatch(
          cacheSearchResult({
            [searchQuery]: response[1],
          })
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSearchKeyVideos = (searchKey) => {
    navigate({
      pathname: "results",
      search: createSearchParams({
        search_query: searchKey,
      }).toString(),
    });
    setSearchQuery(searchKey);

    setShowSuggestions(false);
    dispatch(
      updateSearchKey({
        searchKey: searchKey,
      })
    );
    dispatch(fetchVideosByKeyWord(searchKey));
  };

  const handleFindVideosBySearchKey = () => getSearchKeyVideos(searchQuery);

  const handleEnterPress = async (event) => {
    if(event.key !== 'Enter') return;

    event.preventDefault();
    getSearchKeyVideos(searchQuery);
  }
  const handleReloadMainPage = () => {
    dispatch(reloadTheHomePageVideos());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - f
   * - useEffect()
   * - start timer => make api call after 200 ms
   *
   * key - fo
   * - destroy the component(useEffect return method call)
   * - re render the component
   * - useEffect()
   * - start timer => make api call after 200 ms
   *
   * setTimeout(200) make api call after 200 ms
   *
   *
   */

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={handleToggleMenu}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
          alt="humbergermenu"
        />

        <Link to="/">
          <img
            className="h-8 mx-2"
            src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt="logo"
            onClick={handleReloadMainPage}
          />
        </Link>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            onKeyUp={handleEnterPress}
          />
          <button 
          className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"
          onClick={handleFindVideosBySearchKey}
          >
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className=" fixed bg-white py-5 px-5 w-[29rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  className="cursor-pointer py-2 shadow-sm hover:bg-gray-100"
                  key={index}
                  onClick={(e) => getSearchKeyVideos(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
