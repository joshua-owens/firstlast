import './App.css';
import VideoRecorder from 'react-video-recorder'

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <VideoRecorder
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log('videoBlob', videoBlob)
          }}
          timeLimit={10000}
          isOnInitially={true}
        />
    </div>
  );
}

export default App;
