// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoDialog from '../components/InfoDialog';
import {CircularProgress, LinearProgress} from "@material-ui/core";

function App() {

  const rotationInterval = 10000; // milliseconds
  const [data, setData] = useState();
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const [index, setIndex] = useState(101);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;

    if(showInfoDialog === false) {
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if(oldProgress >= 100) {
            setIndex((e) => e + 1);
            return 0;
          }

          return oldProgress + 3.34;
        });
      }, rotationInterval / 30);
    } else {
      clearInterval(interval);
    }

    return() => clearInterval(interval);
  }, [index, progress, showInfoDialog]); 

  useEffect(() => {
    setLoading(true);
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`) //api link
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
  }, [index]);

  return (
    <>
    {data ? (
      <div className ='App'>
        <div
          style={{display: 'flex',
          justifyContent: 'center',
          
          height: "100vh" || 1200, //1920 x 1200 static 
          width: "100vw" || 1920,
        }}
        onClick={() => setShowInfoDialog(true)} //pop up window
        >
        <img 
          className="backgroundImg"
          src={data?.primaryImage}
          alt="background"
        />

        <img className='img' id='img' src={data?.primaryImage} alt='Primary'/>

        <div className="linearProgressContainer">
            <LinearProgress variant="determinate" value={progress}/>
        </div>

      </div> 
      </div>

    ): (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <CircularProgress size={100} thickness={5} />
      </div>    
    )}

     <InfoDialog
      open = {showInfoDialog}
      setOpen = {setShowInfoDialog} //dialog box component
      data = {data}
      /> 
    </>

  );
}

export default App;
