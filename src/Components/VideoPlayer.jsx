import React, { useRef } from 'react'
import './VideoPlayer.css'
// import YOUR_VIDEO from '../../src/assets/YOUR_VIDEO.mp4'
const VideoPlayer = ({playState, SetPlayState}) => {
    const player = useRef(null);
    const closePlayer = (e) => {
    if(e.target === player.current){
        SetPlayState(false);
    }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
    {/* <video src={YOUR_VIDEO} autoPlay muted controls></video> */}
    </div>
  )
}

export default VideoPlayer