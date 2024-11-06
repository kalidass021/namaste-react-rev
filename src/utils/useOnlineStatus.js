import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if online
    // add the event listener to the browser only one time
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }, []);
    // boolean
    return onlineStatus;
}

export default useOnlineStatus;