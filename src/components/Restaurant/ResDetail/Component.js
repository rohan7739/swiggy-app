import { resImg } from "../../../constants/Constants";

const Component = ({ resDetails }) => {
    const tempData = [];
    const resDetailData = resDetails?.data?.cards;
    // console.log("redDetails=", resDetailData)

    return Object.keys(resDetails).length === 0 ? (<>No data found</>) : (
        <>
            <div className="all-res-details">
                <div className="res-search-food">
                    <i className="res-search-food-item fa-regular fa-heart"></i>
                    <i className="res-search-food-item fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="res-address-rating">
                    <div className="res-address">
                        <p className="res-name">{resDetailData[0]?.card?.card?.info?.name}</p>
                        <p className="res-cuisine">{resDetailData[0]?.card?.card?.info?.cuisines.join(", ")}</p>
                        <p className="res-distance">{resDetailData[0]?.card?.card?.info?.locality + ", " + resDetailData[0]?.card?.card?.info?.sla?.lastMileTravelString}</p>
                    </div>
                    <div className="res-rating-details">
                        <p className="res-rating">⭐ {resDetailData[0]?.card?.card?.info?.avgRating}</p>
                        <p className="res-total-ratings">{resDetailData[0]?.card?.card?.info?.totalRatingsString}</p>
                    </div>
                </div>
                <div className="res-time-price">
                    <div className="res-price-card">
                        <p className="res-delivery-time">
                            <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle>
                                <path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                            </svg>
                            {resDetailData[0]?.card?.card?.info?.orderabilityCommunication?.title?.text}
                        </p>
                        <p className="res-price">
                            <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle>
                                <path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path>
                            </svg>
                            {resDetailData[0]?.card?.card?.info?.costForTwoMessage}
                        </p>
                    </div>
                    <p className="res-orderability">{resDetailData[0]?.card?.card?.info?.orderabilityCommunication?.message?.text}</p>
                </div>
                <div className="res-offers">
                    {tempData.concat(resDetailData[1]?.card?.card?.gridElements?.infoWithStyle?.offers)?.map((data) => {
                        return (
                            <div key={data?.info?.offerIds[0]} className="res-offer-item">
                                <div className="res-offer-item-header">
                                    <img className="res-offer-logo" src={resImg + data.info.offerLogo} alt="offer logo icon" />
                                    <div className="res-offer-item-title">{data.info.header}</div>
                                </div>
                                <div className="res-offer-item-coupon">
                                    {data.info.couponCode + "|" + data.info.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="res-details-foods">
                    {tempData.concat(resDetailData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map((data, i) => {
                        let len = Object.keys(resDetailData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).length;
                        if (i === 0) return (<></>);
                        if (i === len - 2) {
                            return (
                                <>
                                    <div className="res-bottom-card-first">
                                        <img className="res-bottom-image" src={resImg + data?.card?.card?.imageId} alt="license" />
                                        <p className="res-license-no">{data?.card?.card?.text[0]}</p>
                                    </div>
                                </>
                            )
                        }
                        if (i === len - 1) {
                            return (
                                <>
                                    <div className="res-bottom-card-second">
                                        <p className="card-bottom-name">{data?.card?.card?.name}</p>
                                        <p className="card-bottom-area">(Outlet:{data?.card?.card?.area})</p>
                                        <p className="card-bottom-address">{data?.card?.card?.completeAddress}</p>
                                    </div>
                                </>
                            )
                        }
                        // if (!data?.card?.card?.itemCards) console.log("different cards")
                        // console.log("length=", Object.keys(resDetailData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).length);
                        // console.log("foodcard=", data?.card?.card?.itemCards);
                        return (
                            <div className="res-detail-food">
                                <h1 className="res-detail-food-heading">{data?.card?.card?.title} {data?.card?.card?.itemCards ? "(" + Object.keys(data?.card?.card?.itemCards).length + ")" : ""}</h1>
                                {data?.card?.card?.itemCards?.map((foodCard) => {
                                    // console.log("foodcard=", data?.card?.card);
                                    // if (foodCard?.card?.info?.variantsV2?.variantGroups) console.log("food price=", foodCard?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price)
                                    // else console.log("food price===", foodCard?.card?.info?.price / 100);
                                    return (
                                        <>
                                            <div className="food-box">
                                                <div className="food-box-details">
                                                    <h5 className="food-name">{foodCard?.card?.info?.name}</h5>
                                                    <p className="food-price">₹ {foodCard?.card?.info?.variantsV2?.variantGroups ? foodCard?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price : (foodCard?.card?.info?.price / 100)}</p>
                                                    <p className="food-description">{foodCard?.card?.info?.description}</p>
                                                </div>
                                                <div className="food-img-add-btn">
                                                    {foodCard?.card?.info?.imageId ? <img className="food-image" src={resImg + foodCard?.card?.info?.imageId} alt="food" /> : ""}
                                                    <button className="food-addtocart-btn">ADD</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })}
                                <div className="res-detail-food-end"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Component;