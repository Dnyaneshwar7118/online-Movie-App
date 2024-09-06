import "./Home.css"

function Home() {
    return (
        <>
            <div className="header-Wrapper">
                <div className="imageSlide">
                    <div className="moviesBlog-Wrapper">
                        <h2>Now Showing</h2>
                        <div className="movieImage-wrapper">
                            <div className="imgWrapper">
                                <img src="image 1.png" alt="" />
                                <span>Movie Title</span>
                            </div>
                            <div className="imgWrapper">
                                <img src="image 4.png" alt="" />
                                <span>Movie Title</span>
                            </div>
                            <div className="imgWrapper">
                                <img src="image 3.png" alt="" />
                                <span>Movie Title</span>
                            </div>
                            <div className="imgWrapper">
                                <img src="image 2.png" alt="" />
                                <span>Movie Title</span>
                            </div>
                        </div>
                    </div>
                    <div className="movieImage-wrapper">
                        <div className="imgWrapper">
                            <img src="image 5.png" alt="" />
                            <span>Movie Title</span>
                        </div>
                        <div className="imgWrapper">
                            <img src="image 6.png" alt="" />
                            <span>Movie Title</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;