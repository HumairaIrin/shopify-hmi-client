import { useEffect, useState } from "react"

const useProductVerified = id => {
    const [isProductVerified, setIsProductVerified] = useState(false);
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/seller/product/status/${id}`)
                .then(res => res.json())
                .then(data => {
                    setIsProductVerified(data.isProductVerified);
                })
        }
    }, [id])
    return [isProductVerified]
}

export default useProductVerified;