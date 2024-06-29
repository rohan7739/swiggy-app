import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Component = ({ resAllData, listOfRes, filterList, resImg, setSearchText, searchText, setFilterList, loadMore, ratingColor }) => {
    const [copy, setCopy] = useState([]);
    useEffect(() => {
        setCopy(filterList);
    }, [])
    const [relevenceActiveStatus, setRelevenceActiveStatus] = useState("active");
    const [deliveryTimeActiveStatus, setDeliveryTimeActiveStatus] = useState("");
    const [ratingActiveStatus, setRatingActiveStatus] = useState("");
    const [lowToHighActiveStatus, setLowToHighActiveStatus] = useState("");
    const [highToLowActiveStatus, setHighToLowActiveStatus] = useState("");

    const sortByRelevence = () => {
        console.log(copy)
        setRelevenceActiveStatus("active");
        setDeliveryTimeActiveStatus("")
        setRatingActiveStatus("");
        setLowToHighActiveStatus("");
        setHighToLowActiveStatus("");

    }

    const sortByDeliveryTime = () => {
        const sortedList = filterList.sort((a, b) => a?.data?.data.deliveryTime - b?.data?.data.deliveryTime);
        setFilterList(sortedList)
        setRelevenceActiveStatus("");
        setDeliveryTimeActiveStatus("active")
        setRatingActiveStatus("");
        setLowToHighActiveStatus("");
        setHighToLowActiveStatus("");
    }


    const sortByRating = () => {
        const sortedList = filterList.sort((a, b) => b?.data?.data.avgRating - a?.data?.data.avgRating);
        setFilterList(sortedList)
        setRelevenceActiveStatus("");
        setDeliveryTimeActiveStatus("")
        setRatingActiveStatus("active");
        setLowToHighActiveStatus("");
        setHighToLowActiveStatus("");
    }

    const sortByLowToHigh = () => {
        const sortedList = filterList.sort((a, b) => a?.data?.data.costForTwo - b?.data?.data.costForTwo);
        setFilterList(sortedList)
        setRelevenceActiveStatus("");
        setDeliveryTimeActiveStatus("")
        setRatingActiveStatus("");
        setLowToHighActiveStatus("active");
        setHighToLowActiveStatus("");

    }

    const sortByHighToLow = () => {
        const sortedList = filterList.sort((a, b) => b?.data?.data.costForTwo - a?.data?.data.costForTwo);
        setFilterList(sortedList)
        setRelevenceActiveStatus("");
        setDeliveryTimeActiveStatus("")
        setRatingActiveStatus("");
        setLowToHighActiveStatus("");
        setHighToLowActiveStatus("active");
    }

    return (

        <>
            <div className="all-res-filters">
                <p className="totalrestaurants">{resAllData?.data?.cards[2]?.data?.data?.totalRestaurants} restaurants</p>
                <div className="filter-bar">
                    <p className={"res-filter " + relevenceActiveStatus} onClick={() => sortByRelevence()}>Relevance</p>
                    <p className={"res-filter " + deliveryTimeActiveStatus} onClick={() => sortByDeliveryTime()}>Delivery Time</p>
                    <p className={"res-filter " + ratingActiveStatus} onClick={() => sortByRating()}>Rating</p>
                    <p className={"res-filter " + lowToHighActiveStatus} onClick={() => sortByLowToHigh()}>Cost: Low To High</p>
                    <p className={"res-filter " + highToLowActiveStatus} onClick={() => sortByHighToLow()}>Cost: High To Low</p>
                    <div className="all-filter-options">Filters <span><i className="filter-icon fa-solid fa-arrow-down-short-wide"></i></span></div>
                </div>
            </div>
            {filterList?.length === 0 ? <h6 className='text-center mt-5'>No restaurant found</h6> :
                <div className="allcards">
                    <div className="row row-cols-3 row-cols-md-4 g-5">
                        {filterList?.map((res) => {
                            const data = res?.data?.data;
                            const url = data?.name.toLowerCase() + "-" + data?.locality.toLowerCase() + "-" + data?.area.toLowerCase() + "-" + data?.slugs?.city.toLowerCase() + "-" + data?.id;
                            return (
                                <Link to={"/restaurants/" + url} key={data?.id} >
                                    <div className="col res-cards">
                                        <div className="card h-100">
                                            <div className="card-image">
                                                <img src={resImg + "" + data?.cloudinaryImageId} className="card-img-top" alt="restaurant card" />
                                            </div>
                                            <div className="card-body">
                                                <div className="card-body-details">
                                                    <h5 className="card-title">{data?.name}</h5>
                                                    <p className="card-text">{data?.cuisines.join(", ").length > 20 ? data?.cuisines.join(", ").substring(0, 60) + "..." : data?.cuisines.join(", ")}</p>
                                                </div>
                                                <div className='card-res'>
                                                    <p className={`res-rating ${ratingColor(data?.avgRating)}`}><i className="rating-icon fa-solid fa-star"></i>{data?.avgRating}</p>
                                                    <li className="res-deliverytime">{data?.deliveryTime} MINS</li>
                                                    <li className="res-cost">{data?.costForTwoString}</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        }
                    </div >
                    <button className='btn btn-primary loadMore' onClick={loadMore}>Load More</button>
                </div >
            }
        </>
    )
}

export default Component;