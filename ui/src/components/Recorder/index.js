import React from 'react'
import VideoRecorder from 'react-video-recorder'

export default function Recorder () {
  return (
    <VideoRecorder
      onRecordingComplete={(videoBlob) => {
        // Do something with the video...
        console.log('videoBlob', videoBlob)
      }}
      timeLimit={10000}
      isOnInitially={true}
    />
  )
}
