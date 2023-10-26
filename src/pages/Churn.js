import Header  from "../components/Header/Header";
import Drag from "../components/Drag/Drag";
import Image from "../components/Image/Image";

import './Churn.css';

export default function Churn() {
    return (
        <>
            <Header/>
            <Image/>
            <div className="card">
                <h2>
                    Churn Prediction
                </h2>
                <Drag/>
            </div>
        </>
    )
}