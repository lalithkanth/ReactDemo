import Header  from "../components/Header/Header";
import MainButton from "../components/MainButton/MainButton";
import Image from "../components/Image/Image";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

import './Home.css'

export default function Home() {
    return (
        <>
            <Header/>
            <Image/>
            <div className="stacked-centered-container">
                <div className="stacked-centered-content">
                    <div className="box">
                        <h2>
                            Make Use Of Our Features For Analysing
                        </h2>
                    </div>
                    <div className="box">
                        <div className="button-container">
                            <div className="button-row">
                                <MainButton to="/sen" text="Sentiment analysis"  icon={<EmojiEmotionsIcon  style={{color:"#fff",fontSize: "30px",position:"relative",top: "9px",left:"4px"}}/>}/>
                                <MainButton to="/churn" text="Churn Prediction" icon={<AutoGraphIcon style={{color:"#fff",fontSize: "30px",position:"relative",top: "9px",left:"4px"}}/>}/>
                                <MainButton to="/social" text="Social Listening" icon={<ConnectWithoutContactIcon style={{color:"#fff",fontSize: "30px",position:"relative",top: "9px",left:"4px"}}/>}/>
                            </div>
                            <div className="gap"></div>
                            <div className="button-row">
                                <MainButton to="/fake" text="Fake Detection" icon={<DocumentScannerIcon style={{color:"#fff",fontSize: "30px",position:"relative",top: "9px",left:"4px"}}/>}/>
                                <MainButton to="/meme" text="Meme Analysis" icon={<EmojiEmotionsIcon  style={{color:"#fff",fontSize: "30px",position:"relative",top: "9px",left:"4px"}}/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
         
        </>
    )
}

