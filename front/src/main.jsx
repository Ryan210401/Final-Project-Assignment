import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import TokpedPlay from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




const VideoList = [
  { id: '1', title: 'Unboxing TECNO POVA 5 & 5 PRO Indonesia!' },
  { id: '2', title: 'My trip My Adventure' },

];

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoList[0]);

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      
      <div>
        <h2>{currentVideo.title}</h2>
        <TokpedPlay videoId={currentVideo.id} />
      </div>

      <div>
        <h3>Video List</h3>
        <ul>
          {VideoList.map(video => (
            <li key={video.id} onClick={() => setCurrentVideo(video)}>
              {video.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

