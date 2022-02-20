import React from 'react';
import { Link } from 'react-router-dom';

//Styled Components
import { StyledHeader } from './Header.styled';

//Images
import { default as Logo } from '../../../images/global/header/abshift-logo.svg'

//Icons
import { IoVolumeHighSharp, IoVolumeMuteSharp } from 'react-icons/io5';

const Header = ({ 
  toggleVolume, 
  volumeState,
  setLevelState,
 }) => {

  //Set Level State Back to 0 Function
  function resetLevelState() {
  setLevelState(0)
  }


  return (
  <>
      <StyledHeader>
        <div className="headerContainer">

          <div className="logoBlock">
            <Link to="/" onClick={resetLevelState}><img alt="AbShift Logo" src={Logo}/></Link>
          </div>

          <div className="volumeBlock">
            <div className="volumeButton">
              {/*If volumeState is true, show the mute button. If false, show the unmute button*/}
              {volumeState ? <IoVolumeHighSharp tabIndex="0" onClick={toggleVolume} title="Mute Volume" description="Toggling this icon will mute and unmute audio playback on this site." size="100%"/>
              : <IoVolumeMuteSharp tabIndex="0" onClick={toggleVolume} title="Unmute Volume" description="Toggling this icon will mute and unmute audio playback on this site." size="100%"/> }
            </div>
          </div>

        </div>
      </StyledHeader>
  </>
  )
};

export default Header;
