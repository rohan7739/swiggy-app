import { useState, useEffect } from 'react';
import { SEARCH_RES_API } from '../../constants/Constants';
import { Link } from 'react-router-dom';

const Component = ({ searchData }) => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchString, setSearchString] = useState("");

    // useEffect(() => {
    //     fetchSearchResult();
    // }, [])

    const fetchSearchResult = async () => {
        const searchRes = await fetch(SEARCH_RES_API(searchString));
        const json = await searchRes.json();
        console.log(json);
        setSearchResult(json);
    }

    return (
        <>
            <div className="all-search-items">
                <div className="input-group mb-3 item-input-section">
                    <input type="text" className="form-control input-bar" onChange={(e) => setSearchString(e.target.value)} value={searchString} placeholder="Search for restaurants and food" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button className="btn btn-outline-secondary input-btn" onClick={() => fetchSearchResult()} type="button" id="button-addon1"><i className="input-btn-icon fa fa-solid fa-magnifying-glass" ></i></button>
                </div>

                {searchResult.length == 0 ?
                    (
                        <div className="search-cuisines">
                            <h5 className="popular-cuisines">Popular Cuisines</h5>
                            <div className="cuisine-images">
                                {searchData?.data?.cards[1]?.card?.card?.imageGridCards?.info?.map((res) =>
                                    <img key={res.id} src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + res?.imageId} className="cuisine-img" alt="" />
                                )}

                            </div>
                        </div>
                    )
                    :
                    (
                        <>
                            <div className="search-result">
                                {searchResult.data.suggestions.map((res) => {
                                    return (
                                        <Link to="/">
                                            <div className="searched-data">
                                                <img className='searched-data-img' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" + res.cloudinaryId} alt="restaurant" />
                                                <div className="searched-data-details">
                                                    <p className='searched-data-name'>{res.text}</p>
                                                    <p className="searched-data-type">{res.type}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                                <div className="see-all-results">
                                    <div className="see-all-icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <p className="see-all-text">See all results for '{searchString}'</p>
                                </div>
                            </div>
                        </>
                    )
                }


                {/* <form className="d-flex searchRes" role="search">
                    <input className="form-control searchBar" type="search" onChange={(e) => setSearchText(e.target.value)} value={searchText} placeholder="Restaurant Name" />
                    <button className='btn btn-primary' onClick={() => setFilterList(listOfRes.filter((res) => res?.data?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())))} type='button'>Search</button>
                    <button className='btn btn-danger ms-2' onClick={() => { setFilterList(listOfRes); setSearchText("") }} type='button'>Clear</button>
                </form> */}
            </div >
        </>
    )
}

export default Component;