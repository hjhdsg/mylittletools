import React from 'react';
import { PlayButton, Timer} from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import styled from "styled-components"
const Style = styled.div`
  .container{
        position: relative;
        top:70vh;
        padding-left:30px;
        color:black;
        display:flex;
        .sb-soundplayer-btn{
            width:50px;
            height:50px;
            margin-right:10px;

        }
        .title{
            margin-bottom:6px;
            
        }
        .sb-soundplayer-timer{

        }
  }

  
`
const Audio = withCustomAudio(props => {
  const { trackTitle } = props;
  return (
    <Style>
      <div className="container">
        <PlayButton {...props} />
        <div>
          <h2 className="title">{trackTitle}</h2>
          
          <Timer {...props} />
        </div>
        

      </div>

    </Style>
  );
});

export default Audio;
