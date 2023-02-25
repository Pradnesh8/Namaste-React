import { LINKED_IN_PROFILE_URL } from "../config";

const Footer = () => {
    return (
        <div className="text-center bg-[#A1FFCE] p-1 mt-1 font-light text-sm">
            Foodie Woodie ©️ 2023 Created with ❣️ by <a href={LINKED_IN_PROFILE_URL} target="_blank"><span className="cursor-pointer font-medium">Pradnesh Khedekar</span></a>
        </div>
    )
}

export default Footer;