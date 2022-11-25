import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Shopify HMI`;
    }, [title])
};

export default useTitle;