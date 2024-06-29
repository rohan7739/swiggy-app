const Component = ({ leftBtn, rightBtn }) => {
    return (
        <div className="app-layout">

            <div className="App">
                <div id='prev' onClick={() => leftBtn()}><button className="prev-btn"></button></div>

                <div id='all-cards'>
                    <header className="App-header" id='App-header'>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cwbqaumccjyifi90c9e1" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lyn9at38gjithnogzfui" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" id='card'>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" className="card-img-top" alt="..." />
                        </div>
                    </header>
                </div>

                <div id='next' onClick={() => rightBtn()}><button className="next-btn"></button></div>
                {/* <button id='next' onClick={() => rightBtn()}>Next</button> */}
            </div>

        </div >
    )
}

export default Component;