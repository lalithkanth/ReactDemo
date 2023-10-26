import Header  from "../components/Header/Header";
import Drag from "../components/Drag/Drag";
import PillComponent from "../components/Labels/PillComponent";
import Image from "../components/Image/Image";


export default function Meme() {
    return (
        <>
            <Header/>
            <Image/>
        <div className="card">
            <h2>
                Meme Analysis
            </h2>
            <Drag/>
            <PillComponent/>
        </div>
        </>
    )
}