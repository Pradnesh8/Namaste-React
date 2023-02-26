import React from 'react';
import { GIT_PROFILE_URL } from '../config';

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
                <img src={this.state.avatar} alt="avatar" className='w-80 h-80' />
                <div className="name">{this.state.name}</div>
                <div className="bio">Bio : {this.state.bio}</div>
                <div className="views">Views : {this.props?.data?.count}</div>
            </div>
        )
    }

    componentWillUnmount() {

    }
}

export default Profile;