import { useEffect, useState } from "react";

function Apifetch({ route, timeOut }) {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [peding, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        setTimeout(() => {
            fetch(route)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPending(false)
                    setData(data)
                })
                .catch((err) => {
                    setError(err.message)
                })
        }, 1000 * timeOut)
    }, [])

    return {
        data,
        peding,
        error
    }
}

export default Apifetch;