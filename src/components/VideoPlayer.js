import React from 'react'
import ReactPlayer from 'react-player'
import video from '../assets/Welcome.mp4'
import thumbnail  from '../assets/india.png'

const VideoPlayer = (props) => {
  return (
    <div className='videoplayer'>
        <ReactPlayer 
        url={video}
        controls={true}
        loop={true}
        className='video-react'
        // light={thumbnail}
        playIcon={true}
        />
    </div>
  )
}

export default VideoPlayer