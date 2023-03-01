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
            <>
                <div className="p-2">
                    <h1 className="text-3xl pl-3 font-bold" data-testid="about-us">About</h1>
                    <div className="about flex flex-wrap justify-around items-center pt-10 pr-10">
                        <div className='flex justify-between items-start text-center min-h-[60vh] w-full'>
                            <Profile {...this.state} />
                            <ProfileStore />
                        </div>
                    </div>
                </div>
                <div className='flex-[100%] w-full flex justify-center items-center gap-5 py-10 my-10 bg-green-300'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                    </span>
                    <div className='font-semibold text-4xl'>
                        Free Cash on Delivery
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <div className='font-semibold text-4xl'>
                        3.5K+ Happy customers
                    </div>
                </div>
            </>
        )
    }

    componentWillUnmount() {
        // Called when Component is about to destroy or change in route
        clearInterval(this.timer);//Clears the interval started in componentDidmount 

    }
}
export default About;