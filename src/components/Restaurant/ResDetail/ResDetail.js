import Component from "./Component";
import { useParams } from 'react-router-dom'
import { RES_DETAILS } from "../../../constants/Constants";
import './style.css';
import { useEffect, useState } from "react";

const ResDetail = () => {

    const [resDetails, setResDetails] = useState([]);

    useEffect(() => {
        fetchResDetails();
    }, [])

    const id = useParams();
    const urlId = id.Id.split("-");
    const uId = urlId[urlId.length - 1]
    console.log("id=", uId);

    const fetchResDetails = async () => {
        const resData = await fetch(RES_DETAILS(uId));
        const json = await resData.json();
        setResDetails(json);
    }

    return (
        <div className="resdetails-component">
            <Component resDetails={resDetails} />
        </div>
    )
}

export default ResDetail;