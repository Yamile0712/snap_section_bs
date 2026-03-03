import React from 'react'
import { Header } from '../components/Header.jsx'


export const About = () => {
    return (
        <>

            <br />
            <br />
            <br />
            <br />

            <div className="container d-flex flex-column gap-5" >

                <div className="row">
                    <div className="col-sm-11"><h4>Join our community</h4></div>
                    <p>30-day, hassle-free money back guarantee</p>
                    <p>  Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>

                <div className="row bg-info ">
                    <div className="col-sm">Monthly Subscription
                        $29
                        per month
                        Full access for less than $1 a day
                        <a href="http://www.jango.com" className="btn btn-success">Sign Up</a>
                    </div>

                    <div className="col-sm">Why Us
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