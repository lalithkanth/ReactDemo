import Header  from "../components/Header/Header";
import Search from "../components/Search/Search";
import Rounded from "../components/Rounded/Rounded";
import FileUpload from "../components/FileUpload/FileUpload";
import Image from "../components/Image/Image";


export default function Fake() {
    
    const handleFileChange = (selectedFile) => {
        console.log('Selected file:', selectedFile);
      };

    return (
        <>
            <Header/>
            <Image/>
            <div className="card">
                <h2 className="text">
                    Fake Sentiment Analysis
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