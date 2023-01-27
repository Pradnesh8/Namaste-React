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
        console.log("Profile constructor", this.props);
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
            console.log("Profile setState callback", this.state)
        });//setState() method is asynchronous so below line will print initialValues of this.state,
        // Under the covers React will batch multiple calls to setState() into a single state mutation, 
        // and then re-render the component a single time, rather than re-rendering for every state change.
        console.log("Profile componentDidMount", this.state);

    }

    componentDidUpdate() {
        console.log("Profile componentDidUpdate");
    }

    render() {
        console.log("Profile render", this.state)
        return (
            <div className='profile'>
                <h2>Profile</h2>
                <img src={this.state.avatar} alt="avatar" />
                <div className="name">{this.state.name}</div>
                <div className="bio">Bio : {this.state.bio}</div>
                <div className="views">Views : {this.props?.data?.count}</div>
            </div>
        )
    }

    componentWillUnmount() {
        console.log("Profile componentWillUnmount");
    }
}

export default Profile;