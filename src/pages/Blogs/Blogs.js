import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Answering Question</h2>
            <div className="ans">
                <h6><span>Question 1: Authentication vs Authorization</span></h6>
            <p>Ans: <span>Every Authorization is authentication but not all Authentication is Authorization.</span> Authentication is provides you access something without editing or modified. It's just read only property. On the other hand Authorization provides you access with updating modifing and any other operations that they served'.
              For Example: User of any website is authentication.
              Admin of any website is Authorization.
              </p>
          </div>
          <div className="ans">
          <h6><span>Question 2: Why we are using Firebase? Without firebase tell me some other site?</span></h6>
          <p>
          Ans: The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.
          <ul>
              <li>Deployed</li>
              <li>Nhost</li>
              <li>Hasura</li>
              <li>Appwrite</li>
          </ul>
          </p>
          </div>
        </div>
    );
};

export default Blogs;