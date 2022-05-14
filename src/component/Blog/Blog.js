import React from 'react';
import './Blog.css';
import img1 from '../images/javascript-vs-nodejs.png';
import img2 from '../images/mongoimg.png';
import img3 from '../images/sql.png';
import img4 from '../images/jwt.png';



const Blog = () => {
    return (
        <div className="blog container">
             <div class="blog-card row">
                <div class=" col-sm-12 col-lg-8">
                    <div>
                        <h3 className="">
                            Difference between javascript and nodejs
                        </h3>
                    </div>
                    <p className="text-center fw-bold text-white mt-4">
                        JavaScript একটি scripting প্রোগ্রামিং language. JavaScript শুধু ব্রাউজারে run করা যায়। JavaScript শুধু মাত্র client-side এ ব্যাবহার করা হয়। JavaScript এ HTML ব্যাহার করা যায়। 
                        Nodejs দিয়ে JavaScript চালোনা করা হয়।
                        Nodejs দিয়ে ব্রাউজারের বাইরে JavaScript চালানো যায়।
                        এটি বেশির ভাগ সময় server-side ব্যাবহার করা হয়।
                        Nodejs এ HTML ব্যাবহার কর যায় না।
                    </p>

                </div>
                <div class=" col-sm-12 col-lg-4">
                    <img class="img-fluid" src={img1} alt="" />
                </div>
            </div>       
             <div class="blog-card row mt-5">
                <div class=" col-sm-12 col-lg-8">
                    <div>
                        <h3 className="">
                            When should you use nodejs and when should you use mongodb
                        </h3>
                    </div>
                    <p className="text-center fw-bold text-white mt-4">
                        Nodejs হলো একটি JavaScript runtime environment. এটি সাধারণত JavaScript কে সারর্ভারের বাইরে চালাতে সাহায্যে করে। 
                        Mongodb হলো NoSQL ডাটাবেস যা একটি document ভিত্তিক। এটি ডাটা স্টর করে ব্যাবহৃত হয়। 
                        So mongodb হলো একটি ডাটাবেজ যেখানে আমারা ডাটাকে স্টর করে রাখতে পাড়ি। এবং nodejs client-side কে সারর্ভারের সাথে যুক্ত করতে সাহায্য করে।
                    </p>

                </div>
                <div class=" col-sm-12 col-lg-4">
                    <img class="img-fluid" src={img2} alt="" />
                </div>
            </div>       
             <div class="blog-card row mt-5">
                <div class=" col-sm-12 col-lg-8">
                    <div>
                        <h3 className="">
                            Differences between sql and nosql databases.
                        </h3>
                    </div>
                    <p className="text-center fw-bold text-white mt-4">
                        sql হলো রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম।
                        sql এ ডাটা row এবং columns আকারে সাজানো থাকে। 
                        এটি query language ব্যাহার করে তৈরি এবং এর schema পূর্বনিধারিত থাকে। 
                        এটিতে ডাটা গুলো টেবিল আকারে থাকে।
                        NoSQL হলো non-relational. 
                        NoSQL ডাটাবেজ এ document, key-value, graph ইত্যাদি স্টর করে 
                        Json এর মত ডাটার জন্য NonSQL ব্যাবহার করা উপযুক্ত
                    </p>

                </div>
                <div class=" col-sm-12 col-lg-4">
                    <img class="img-fluid" src={img3} alt="" />
                </div>
            </div>       
             <div class="blog-card row mt-5 mb-5">
                <div class=" col-sm-12 col-lg-8">
                    <div>
                        <h3 className="">
                            What is the purpose of jwt and how does it work
                        </h3>
                    </div>
                    <p className="text-center fw-bold text-white mt-4">
                        Jwt হলো Token-Based Authentication.
                        user যখন username and password দিয়ে sign-in করে তখন authentication server jwt একটি key private করে
                        এই key টি সারর্ভারে স্টর থাকে পরবর্তীতে user আবার যখন sing-in করে তখন authentication আবার jwt এর key টি verify করে যদি সেটা সঠিক থাকে তাহলে user কে web-site এ ঢোকার অনুমতি দিবে।
                    </p>

                </div>
                <div class=" col-sm-12 col-lg-4">
                    <img class="img-fluid" src={img4} alt="" />
                </div>
            </div>       
        </div>
    );
};

export default Blog;