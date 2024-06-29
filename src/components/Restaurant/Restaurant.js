import { useState, useEffect } from 'react';
import { resImg, moreRes, allData } from '../../constants/Constants';
import Component from "./Component";
import './style.css';

const Restaurant = () => {

    const [resAllData, setResAllData] = useState([]);
    const [listOfRes, setListOfRes] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [offset, setOffset] = useState(20);

    useEffect(() => {
        fetchData();
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        const allDataList = await fetch(allData);
        const json = await allDataList.json();
        // console.log("alldata=", json?.data?.cards[2]?.data?.data?.totalRestaurants);
        setResAllData(json);
    }

    const fetchData = async () => {
        const url = moreRes(0);
        const data = await fetch(url);
        const json = await data.json();
        // console.log("fetchData=", json?.data?.cards);
        setListOfRes(json?.data?.cards);
        setFilterList(json?.data?.cards);
    }

    // console.log("filterList=", filterList);

    const loadMore = async () => {
        const url = moreRes(offset);
        const data = await fetch(url);
        const json = await data.json();
        // console.log("more res=", json);
        // console.log("inside load more listofres=", listOfRes);
        setListOfRes(listOfRes.concat(json?.data?.cards));
        setFilterList(listOfRes.concat(json?.data?.cards));
        setOffset(offset + 20);
    }

    const ratingColor = (avgRating) => {
        if (avgRating > 4) return "res-rating-4";
        if (avgRating > 3) return "res-rating-3";
        if (avgRating > 1) return "res-rating-1";
        else return "";
    }

    return (
        <>
            <div className="restaurant-component">
                {/* <h1>Restaurants:</h1> */}
                <Component resAllData={resAllData} listOfRes={listOfRes} filterList={filterList} resImg={resImg} setSearchText={setSearchText} searchText={searchText} setFilterList={setFilterList} loadMore={loadMore} ratingColor={ratingColor} />
            </div>
        </>
    )
}

export default Restaurant;