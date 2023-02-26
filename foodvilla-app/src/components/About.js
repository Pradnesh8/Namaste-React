import React from 'react';
import Profile from './Profile';
import ProfileStore from './ProfileStore';
class About extends React.Component {
    constructor(props) {
        // To initiate state
        super(props);
        this.state = {
            name: "",
            data: { count: 0 }
        }

    }

    componentDidMount() {
        // To make API calls to fetch any data
        this.setState({ name: "John Doe" }) //we can update state and view will re-render
        // this.setState({ data: { count: } })
        this.timer = setInterval(() => {

            this.setState(previousState => ({
                data: { count: previousState.data.count + 1 }
            }));
        }, 1000);

    }

    componentDidUpdate() {
        // Called when new props arrives, if any state changes or force update()

    }

    // Class based component must have render method to work
    render() {

        return (
            <div className="m-2">
                <h1 className="text-3xl ml-3 font-bold" data-testid="about-us">About</h1>
                <div className="about flex justify-around items-center mt-10 mr-10">
                    <div className='flex justify-between items-start text-center min-h-[90vh] w-full'>
                        <Profile {...this.state} />
                        <ProfileStore />
                    </div>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        // Called when Component is about to destroy or change in route
        clearInterval(this.timer);//Clears the interval started in componentDidmount 

    }
}
export default About;