import React from 'react';
import { GIT_PROFILE_URL } from '../config';
import gmail from "../../assets/icons/gmail.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import restaurant from "../../assets/restaurant.png";
class Profile extends React.Component {
    constructor(props) {
        super(props);  //To get updated props from parents, we instantiate immediate Parent with props
        this.state = {
            name: "",
            avatar: "",
            bio: ""
        }

    }

    async componentDidMount() {
        const data = await fetch(GIT_PROFILE_URL);
        const json = await data.json();
        this.setState({
            name: json.name,
            avatar: json.avatar_url,
            bio: json.bio
        }, () => {
            // It prints correct state value as it is callback function which runs after setState is done.

        });//setState() method is asynchronous so below line will print initialValues of this.state,
        // Under the covers React will batch multiple calls to setState() into a single state mutation, 
        // and then re-render the component a single time, rather than re-rendering for every state change.


    }

    componentDidUpdate() {

    }

    render() {

        return (
            <div className='profile flex-[40%] flex flex-col items-center font-semibold text-lg'>
                <img src={restaurant} alt="avatar" className='w-96 h-96 rounded-md hover:scale-105 transition-transform ease-in-out duration-300' />
                <div className="views p-3 flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>Visitors : {this.props?.data?.count}</span></div>
                <div className='flex justify-center gap-3 items-center mt-3'>
                    <img src={gmail} alt="gmail-icon" className='h-8 w-8 cursor-pointer' />
                    <img src={linkedin} alt="linked-icon" className='h-8 w-8 cursor-pointer' />
                    <img src={github} alt="github-icon" className='h-8 w-8 cursor-pointer' />
                    <img src={twitter} alt="twitter-icon" className='h-8 w-8 cursor-pointer' />
                </div>
            </div>
        )
    }

    componentWillUnmount() {

    }
}

export default Profile;