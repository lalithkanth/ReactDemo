import Header  from "../components/Header/Header";
import Search from "../components/Search/Search";
import Rounded from "../components/Rounded/Rounded";
import Image from "../components/Image/Image";
import FileUpload from "../components/FileUpload/FileUpload";
import './Sen.css';

export default function Sen() {

    const handleFileChange = (selectedFile) => {
        console.log('Selected file:', selectedFile);
      };

    return (
        <>
            <Header/>
             <Image/>
            <div className="card">
                <h2 className="text">
                    Sentiment Analysis
                </h2>
                <h3 className="text">
                    Type Your Text, Upload Dataset or Audio
                </h3>
                <div className="searchbar">
                    <Search/>
                </div>
                <div className="samedir">
                    <Rounded text="Analyze" />
                    <FileUpload onFileChange={handleFileChange} />
                </div>
            </div>
        </>
    )
}