import { useEffect, useState } from "react";

const usePortfoliojson = () => {
    const [portfolioDB, setPorfolioDB] = useState([]);
    useEffect(() => {
        fetch("portfolio.json")
            .then(res => res.json())
            // .then(data => console.log(data[0]))
            .then(data => setPorfolioDB(data))
    }, []);
    // console.log(portfolioDB);
    return [portfolioDB, setPorfolioDB]
};
export default usePortfoliojson;