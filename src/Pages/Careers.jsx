import React from 'react'
import { Header } from '../components/Header.jsx'

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

                                <a href="http://www.jango.com" className="btn btn-success">Start exploring</a>

                                <div>
                                    <br />
                                    <br />
                                    <img src="./mujer.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className=" d-flex flex-column justify-content-center h-100 gap-5">
                <div className="text-center">
                    <h1>What you'll get</h1>
                </div>

                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <img src="./images.png" width={70} alt="" />
                            <br />
                            <h3> Whole-food recipes</h3>
                            <p>Each recipe is designed to be healthy delicious and easy to make.</p>
                        </div>

                        <div className="col">
                            <img src="./images.png" width={70} alt="" />
                            <br />
                            <h3>Minimun fuss</h3>
                            <p>We do the hard work, you just enjoy.</p>
                        </div>

                        <div className="col">
                            <img src="./images.png" width={70} alt="" />
                            <br />
                            <h3>Search in seconds</h3>
                            <p>Find the perfect recipe for any occasion with our powerful search.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-6 ">
                        <div className="d-flex flex-column justify-content-center h-100 gap-5">
                            <div >

                                <h1>Built for real life</h1>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, alias consequatur quia cumque, molestiae laudantium aut modi quasi, fugiat minima aperiam inventore maiores est ullam dolores corporis optio ad autem!</p>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga totam hic dolor ipsum, expedita atque,</p>

                            </div>

                        </div>

                    </div>


                    <div className="col-6 ">
                        <div className='text-end'>
                            <img src="./manos.png" className='img-cropped rounded-4' alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className=' container text-center bg-info-subtle'>
                <h1>Ready to cook smarter?</h1>
                <br />
                <p>Join thousands of satisfied customers who are already enjoying healthier, tastier meals with our easy-to-follow recipes.</p>

                <a href="http://www.jango.com" className="btn btn-success">Browse recipes</a>
            </div>
        </>
    )
}
