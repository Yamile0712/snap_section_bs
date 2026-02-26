import "../stylesheets/Home.css"
export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 ">
                        <div className="d-flex flex-column justify-content-center h-100 gap-5">
                            <div>

                                <h1>Make <br />remote work</h1>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit quisquam doloremque fugit perspiciatis magnam possimus reiciendis quam maxime corporis </p>

                                <a href="http://www.jango.com" className="btn btn-dark">learn more</a>

                            </div>

                            <div className="d-flex gap-3 align-items-center">
                            
                                <img src="./shopify.svg" height="25" alt="" />
                                <img src="./openai.svg" height="25" alt="" />
                                <img src="./wiz.svg" height="25" alt="" />
                                <img src="./linear.svg" height="25" alt="" />

                            </div>

                        </div>
                    </div>

                    <div className="col-6 ">

                        <div className="">
                            <img src="./hongo.webp" className="img-cropped" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

