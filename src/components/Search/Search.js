import { useState, useEffect } from "react";
import Component from "./Component";
import { SEARCH_POPULAR_CUISINES, SEARCH_RES_API } from '../../constants/Constants';
import './style.css';

const Search = () => {

    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        fetchPopularCuisines();
    }, []);

    const fetchPopularCuisines = async () => {
        const searchData = await fetch(SEARCH_POPULAR_CUISINES);
        const json = await searchData.json();
        setSearchData(json);
    }

    return (
        <>
            <div className="search-component">
                <Component searchData={searchData} />
            </div>
        </>
    )
}

export default Search;