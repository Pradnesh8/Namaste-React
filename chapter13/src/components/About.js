import React from 'react';
import Profile from './Profile';
class About extends React.Component {
    constructor(props) {
        // To initiate state
        super(props);
        this.state = {
            name: "",
            data: { count: 0 }
        }
        console.log("About Constructor");
    }

    componentDidMount() {
        // To make API calls to fetch any data
        this.setState({ name: "John Doe" }) //we can update state and view will re-render
        // this.setState({ data: { count: } })
        this.timer = setInterval(() => {
            console.log("Interval running");//Unless we clear Interval it will keep running 
            this.setState(previousState => ({
                data: { count: previousState.data.count + 1 }
            }));
        }, 1000);
        console.log("About componentDidMount");
    }

    componentDidUpdate() {
        // Called when new props arrives, if any state changes or force update()
        console.log("About componentDidUpdate")
    }

    // Class based component must have render method to work
    render() {
        console.log("About render");
        return (
            <div className='flex flex-col items-center text-center min-h-[90vh]'>
                <h1>About us</h1>
                <Profile {...this.state} />
            </div>
        )
    }

    componentWillUnmount() {
        // Called when Component is about to destroy or change in route
        clearInterval(this.timer);//Clears the interval started in componentDidmount 
        console.log("About componentWillUnmount");
    }
}
export default About;