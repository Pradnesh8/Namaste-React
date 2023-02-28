import { useState } from "react"
import contactus from "../../assets/contactus.png"
const Contact = () => {
    const [feedback, setFeedback] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const sendFeedback = () => {
        if (feedback.length === 0) {
            setErrMsg("Please enter a feedback");
        }
        else {
            setFeedback("");
            setErrMsg("");
            setSuccessMsg("Thank you for your feedback. We will get back to you soon.")
            setTimeout(() => {
                setSuccessMsg("");
            }, 5000)
        }
    }
    return (
        <div className="m-2">
            <h1 className="text-3xl ml-3 font-bold" data-testid="contact-us">Contact us</h1>
            <div className="contact flex justify-around items-center">
                <img src={contactus} alt="contact-us" className="h-[76vh] flex-1 pl-20" />
                <div className="contact-form flex-1">
                    <div className="text-lg pr-4 mb-3 text-gray-500">
                        We would love to hear from you! At <span className="text-black">FoodieWoodie</span>, we are committed to providing the best possible service to our customers. Whether you have a question, comment, or suggestion, we're here to help.
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl">Please reach out to us at:</span>
                        <a href="mailto:Support@foodiewoodie.co"><span className="font-bold text-2xl">Support@foodiewoodie.co</span></a>
                    </div>
                    <div className="form mt-4 mr-8">
                        <div className=" mb-2 text-lg">
                            Give us a feedback :
                        </div>
                        <textarea className="w-full border p-2 rounded-md" name="feednack" id="feedback" rows="5" onChange={(e) => {
                            setFeedback(e.target.value)
                        }} value={feedback}>
                        </textarea>
                        <div className="w-full flex justify-end">
                            <button className=" bg-[#C8FFD0] p-2 rounded-md" onClick={sendFeedback}>Send feedback</button>
                        </div>
                        {
                            errMsg?.length > 0 && <div className="err flex justify-center text-red-400 mt-4 font-semibold">{errMsg}</div>
                        }
                        {
                            successMsg?.length > 0 && <div className="success flex justify-center text-green-400 mt-4 font-semibold">{successMsg}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;