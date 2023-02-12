import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const ActivateOnline = () => {
            setIsOnline(true);
        }
        const ActivateOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", ActivateOnline);
        window.addEventListener("offline", ActivateOffline);
        return () => {
            removeEventListener("online", ActivateOnline);
            removeEventListener("offline", ActivateOffline);
        }
    }, []);

    return isOnline;
}

export default useOnline;