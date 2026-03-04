import React from 'react'
import { Header } from '../components/Header.jsx'


export const About = () => {
    return (
        <>
            <Header />
        
            <br />
            <br />
            <br />
            <br />

            <div className="container d-flex flex-column gap-5 bg-body-secondary w-100" >

                <div className="row">
                    <div className="col-11 text-info"><h4>Join our community</h4></div>
                    <p className='text-success'>30-day, hassle-free money back guarantee</p>
                    <p>  Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>

                <div className="row bg-info">

                    <div className="col-6 ">
                        <br />
                        <h4>Monthly Subscription</h4>
                        <div className="d-flex align-items-baseline gap-3">
                            <h2>$29</h2>
                            <h5> per month</h5>
                        </div>
                        Full access for less than $1 a day
                        <br />
                        <br />
                        <a href="http://www.jango.com" className="btn btn-success">Sign Up</a>
                        <br />
                        <br />
                    </div>

                    <div className="col-6 bg-info-subtle">
                        <br />
                        <h4>Why Us</h4>
                        <br />
                        Tutorials by industry experts
                        Peer & expert code review
                        Coding exercises
                        Access to our GitHub repos
                        Community forum
                        Flashcard decksNew videos every week
                    </div>
                </div>
            </div>
        </>
    )
}        