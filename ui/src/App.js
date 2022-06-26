import './App.css';
import VideoRecorder from 'react-video-recorder'

function App() {
  return (
    <div className="App">
        <VideoRecorder
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log('videoBlob', videoBlob)
          }}
          timeLimit={10000}
        />
    </div>
  );
}

export default App;
