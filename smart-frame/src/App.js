import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
//import axios from 'axios';
// import InfoDialog from './InfoDialog';

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
            return 0
          }

          return oldProgress + 3.34;
        });
      }, rotationInterval / 30);
    } else {
      clearInterval(interval);
    }

    return() => clearInterval(interval);
  }, [index, progress, showInfoDialog]); 

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
