import Header  from "../components/Header/Header";
import Search from "../components/Search/Search";
import Rounded from "../components/Rounded/Rounded";
import Image from "../components/Image/Image";


export default function Social() {
    return (
        <>
            <Header/>
            <Image/>
            <div className="card">
                <h2 className="text">
                    Social Media Analysis
                </h2>
                <h3 className="text">
                    Enter the keyword
                </h3>
                <div className="searchbar">
                    <Search/>
                </div>
                <div className="samedir">
                    <Rounded text="Analyze" />
                </div>
            </div>
        </>
    )
}