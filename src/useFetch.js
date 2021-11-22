import { useState, useEffect } from "react"
const useFetch = function (url) {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(function (res) {
                return res.json()
            }).then(function (data) {
                console.log(data)
                setData(data)
                setPending(false)
            })
        }, 1000)
    }, [url])
    return {
        data,
        isPending
    }
}
export default useFetch