import React from 'react'

export const Careers = () => {
    return (
        <>


            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="text-center d-flex flex-column justify-content-center h-100 gap-5">
                            <div>

                                <h1>Healthy meals, zero fuss</h1>
                                <br />

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit quisquam doloremque  </p>
                                <br />

                                <a href="http://www.jango.com" className="btn btn-dark">Start exploring</a>

                                <div>
                                    <img src="./mujer.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="text-center d-flex flex-column justify-content-center h-100 gap-5">
                <div>
                    <h1>What you'll get</h1>
                </div>

                 <img src="./images.png" width={70} alt="" />

                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                           
                            Whole-food recipes
                            <p>Each recipe is designed to be healthy delicious and easy to make.</p>
                        </div>

                        <div className="col">
                            Minimun fuss
                            <p>We do the hard work, you just enjoy.</p>
                        </div>

                        <div className="col">
                            Search in seconds
                            <p>Find the perfect recipe for any occasion with our powerful search.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
