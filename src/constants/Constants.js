export const allData = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING";
export const SEARCH_POPULAR_CUISINES = "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=23.208741&lng=77.41235";
export const SEARCH_RES_API = (searchString) => `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=23.208741&lng=77.41235&str=${searchString}&trackingId=undefined`;
// export const RES_DETAILS = (resId) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.208741&lng=77.41235&restaurantId=${resId}`;
export const RES_DETAILS = (resId) => `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.208741&lng=77.41235&restaurantId=${resId}`;
// export const moreRes = (offset) => `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&offset=${offset}&page_type=DESKTOP_SEE_ALL_LISTING`;
export const moreRes = (offset) => `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
export const resImg = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_520/";