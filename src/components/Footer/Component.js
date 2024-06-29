import { CITIES } from '../../constants/Cities';

const Component = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer-items">
                <div className="footer-heading">
                    <div className="footer-company">
                        <p className="heading-company">COMPANY</p>
                        <div className="company-links">
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/about" target="_blank">About us</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/team" target="_blank">Team</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/careers" target="_blank">Careers</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://blog.swiggy.com/" target="_blank">Swiggy Blog</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/bug-bounty" target="_blank">Bug Bounty</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/swiggy-super" target="_blank">Swiggy One</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://corporate.swiggy.com/" target="_blank">Swiggy Corporate</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/swiggy-instamart" target="_blank">Swiggy Instamart</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://www.swiggy.com/swiggy-genie" target="_blank">Swiggy Genie</a></li>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <p className="heading-contact">CONTACT</p>
                        <div className="contact-links">
                            <li className="comp-link"><a className='comp-link-a' href="/" target="_blank">Help & Support</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://partner-with-us.swiggy.com/onboard#/swiggy" target="_blank">Partner with us</a></li>
                            <li className="comp-link"><a className='comp-link-a' href="https://ride.swiggy.com/" target="_blank">Ride with us</a></li>
                        </div>
                    </div>
                    <div className="footer-legal">
                        <p className="heading-legal">LEGAL</p>
                        <div className="contact-links">
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/terms-and-conditions' target='_blank'>Terms & Conditions</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/refund-policy' target='_blank'>Refund & Cancellation</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/privacy-policy' target='_blank'>Privacy Policy</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/cookie-policy' target='_blank'>Cookie Policy</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/offer-terms' target='_blank'>Offer Terms</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/beware-of-phishing-and-fraud' target='_blank'>Phishing & Fraud</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/tnc-corporate-sm' target='_blank'>Corporate - Swiggy Money Codes Terms and Conditions</a></li>
                            <li className="comp-link"><a className='comp-link-a' href='https://www.swiggy.com/tnc-corporate-discount' target='_blank'>Corporate - Swiggy Discount Voucher Terms and Conditions</a></li>
                        </div>

                    </div>
                    <div className="footer-images">
                        <a href="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target='_blank'><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" className="image-link" alt="" /></a>
                        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target='_blank'><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" className="image-link" alt="" /></a>
                    </div>
                </div>
                <div className="footer-cities">
                    <ul className="cities-list">
                        {CITIES.map((city, index) =>
                            <li className="city" key={index}><a className='city-link' href={"https://www.swiggy.com/city/" + city}>{city}</a></li>
                        )}
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="bottom-links">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" className='bottom-image' alt="" />
                        <p className="bottom-copyright">&copy; {currentYear} Swiggy</p>
                        <div className="social-links">
                            <li>facebook</li>
                            <li>pinterest</li>
                            <li>instagram</li>
                            <li>twitter</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component;