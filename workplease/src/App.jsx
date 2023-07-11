import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Sora from './components/Sora';
import Goofy from './components/Goofy';
import SoraNo from './components/SoraNoTex';
import GoofyNo from './components/GoofyNo';
import Donald from './components/Donald';
import DonaldNo from './components/DonaldNo';
import Sheik from './components/Sheik';



function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSystem1, setShowSystem1] = useState(false);
  const [showSystem2, setShowSystem2] = useState(false);
  const [showSystem3, setShowSystem3] = useState(false);
  const [showSystem4, setShowSystem4] = useState(false);
  const [showSystem5, setShowSystem5] = useState(false);
  const [showGame1, setShowGame1] = useState(false);
  const [showGame2, setShowGame2] = useState(false);
  const [showGame3, setShowGame3] = useState(false);
  const [showGame4, setShowGame4] = useState(false);
  const [showGame5, setShowGame5] = useState(false);
const [showGame6, setShowGame6] = useState(false);
const [showGame7, setShowGame7] = useState(false);
const [showGame8, setShowGame8] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [showTitle, setShowTitle] = useState(true);
  const [showLittleTitle, setShowLittleTitle] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);


  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
    setShowSystem1(false);
    setShowSystem2(false);
    setShowSystem3(false);
    setShowSystem4(false);
    setShowSystem5(false);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    playSound();
    if (showTitle) {
      setShowTitle(false);
    }
    setShowLittleTitle(true);
  };
  

  const handleSystem1Click = () => {
    setShowSystem1(true);
    setShowSystem2(false);
    setShowSystem3(false);
    setShowSystem4(false);
    setShowSystem5(false);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };

  const handleSystem2Click = () => {
    setShowSystem1(false);
    setShowSystem2(true);
    setShowSystem3(false);
    setShowSystem4(false);
    setShowSystem5(false);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleSystem3Click = () => {
    setShowSystem1(false);
    setShowSystem2(false);
    setShowSystem3(true);
    setShowSystem4(false);
    setShowSystem5(false);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleSystem4Click = () => {
    setShowSystem1(false);
    setShowSystem2(false);
    setShowSystem3(false);
    setShowSystem4(true);
    setShowSystem5(false);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleSystem5Click = () => {
    setShowSystem1(false);
    setShowSystem2(false);
    setShowSystem3(false);
    setShowSystem4(false);
    setShowSystem5(true);
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };

  const handleGame1Click = () => {
    setShowGame1(true);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };

  const handleGame2Click = () => {
    setShowGame1(false);
    setShowGame2(true);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };

  const handleGame3Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(true);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };

  const handleGame4Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(true);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleGame5Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(true);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  
  const handleGame6Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(true);
    setShowGame7(false);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleGame7Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(true);
    setShowGame8(false);
    setShowLittleTitle(true);
    playSound();
  };
  const handleGame8Click = () => {
    setShowGame1(false);
    setShowGame2(false);
    setShowGame3(false);
    setShowGame4(false);
    setShowGame5(false);
    setShowGame6(false);
    setShowGame7(false);
    setShowGame8(true);
    setShowLittleTitle(true);
    playSound();
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setDropdownOpen(false);
    setShowLittleTitle(true);
    playSound();
  };
  function playSound() {
    const audio = new Audio('src/assets/kingdom-hearts-2-menu-noises-sound-effect-fx_u3K7Ot4x.mp3');
    audio.play();
  }
  const handleMouseEnter = () => {
    const audiohov = new Audio('src/assets/kingdom-hearts-2-menu-noises-sound-effect-fx_1GJjr1pg.mp3');
    audiohov.play();
  };
  
  const handleStartButtonClick = () => {
    setShowStartButton(false);
    playSound22();
    playSound33();
  };
  function playSound22() {
    const audio = new Audio('src/assets/Jungle in Gaming Mix [01]   PS1, N64, Xbox  1hr Drum and Bass Mix - ambient, intelligent, liquid.mp3');
    audio.volume = .05;
    audio.play();
  }
  function playSound33() {
    const audio = new Audio('src/assets/welcome-back-xcom-sound-effect-voice-line_FkeLlMrp.mp3');
    audio.volume = .3;
    audio.play();
  }
  

  return (
    <div className="App">
      {showTitle && (
        <div className="Title">
          
          <img src="src/assets/logore.gif" alt="logo" />

          <a className='smallpls' href = "" >
          <img   src="src/assets/git!.gif" alt="logo" /></a>
          <a className='smallpls2'href = "" >
          <img  src="src/assets/log4.gif" alt="logo" /></a>
          {showStartButton && (
            <button className='sttartt' onClick={handleStartButtonClick}><img src={"src/assets/giphy.gif"} alt="System 1" /></button>
          )}
        </div>
      )}
      <div className="Menu">
        <div className={`Dropdown ${dropdownOpen ? 'Open' : ''}`}>
        {!showStartButton && (
          <div className="SelectCharacter">
          <button className="DropdownButton"onMouseEnter={handleMouseEnter} onClick={handleDropdownToggle}>
          <img src={"src/assets/selectt.png"} alt="System 1" />
          </button>
          </div>
          )}
          {dropdownOpen && !(showSystem1 || showSystem2 || showSystem3 || showSystem4 || showSystem5) && (
            <div className="DropdownContent">
              <div className="Row">
                <button onMouseEnter={handleMouseEnter}onClick={handleSystem1Click}><img src={"src/assets/ps11.png"} alt="System 1" /></button>
              </div>
              <div className="Row">
              <button onMouseEnter={handleMouseEnter}onClick={handleSystem2Click}><img src={"src/assets/ps2.png"} alt="System 2" /></button>
              </div>
              <div className="Row">
              <button onMouseEnter={handleMouseEnter}onClick={handleSystem3Click}><img src={"src/assets/n64.png"} alt="System 3" /></button>
              </div>
              <div className="Row">
              <button onMouseEnter={handleMouseEnter}onClick={handleSystem4Click}><img src={"src/assets/gc.png"} alt="System 4" /></button>
              </div>
              <div className="Row">
              <button onMouseEnter={handleMouseEnter}onClick={handleSystem5Click}><img src={"src/assets/xbox.png"} alt="System 5" /></button>
              </div>
            </div>
          )}
          {dropdownOpen && (showSystem1 || showSystem2 || showSystem3 || showSystem4 || showSystem5) && !(showGame1 || showGame2 || showGame3 || showGame4 || showGame5 || showGame6 || showGame7 || showGame8) && (
            <div className="DropdownContent">
              <div className="Row">
                {showSystem2 && <button onClick={handleGame1Click}><img src={"src/assets/coollslsss.png"} alt="Game 1" /></button>}
                </div>
                <div className="Row">
                {showSystem2 && <button onClick={handleGame2Click}><img src={"src/assets/kh2maybe.png"} alt="Game 2 " /></button>}
                </div>
                <div className="Row">
                {showSystem1 && <button onClick={handleGame3Click}><img src={"src/assets/ff7.png"} alt="Game 2 " /></button>}
                </div>
                <div className="Row">
                {showSystem1 && <button onClick={handleGame4Click}><img src={"src/assets/tek.png"} alt="Game 2 " /></button>}
                </div>
              <div className="Row">
                {showSystem3 && <button onClick={handleGame5Click}><img src={"src/assets/oc.png"} alt="Game 2 " /></button>}
              </div>
              <div className="Row">
                {showSystem3 && <button onClick={handleGame6Click}><img src={"src/assets/sm64.png"} alt="Game 2 " /></button>}
              </div>
              <div className="Row">
                {showSystem4 && <button onClick={handleGame7Click}><img src={"src/assets/ssb.png"} alt="Game 2 " /></button>}
              </div>
              <div className="Row">
                {showSystem4 && <button onClick={handleGame8Click}><img src={"src/assets/re4.png"} alt="Game 2 " /></button>}
              </div>
            </div>
          )}
          {dropdownOpen && (showGame1 || showGame2 || showGame3 || showGame4 || showGame5 || showGame6 || showGame7 || showGame8) && (
            <div className="DropdownContent">
              {showGame1 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Sora')}><img src={"src/assets/sora.png"} alt="System 2" /></button>
                    <button className='nochar' onClick={() => handleCharacterSelect('SoraNo')}>.</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Goofy')}><img src={"src/assets/gooooff.png"} alt="System 2" /></button>
                    <button className='nochar' onClick={() => handleCharacterSelect('GoofyNo')}>.</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Donald')}><img src={"src/assets/donny.png"} alt="System 2" /></button>
                    <button onClick={() => handleCharacterSelect('DonaldNo')}>.</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}><img src={"src/assets/riku.png"} alt="System 2" /></button>
                    <button onClick={() => handleCharacterSelect('KairiNo')}>.</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}><img src={"src/assets/kairi.png"} alt="System 2" /></button>
                    <button onClick={() => handleCharacterSelect('RikuNo')}>.</button>
                  </div>
                </>
              )}
              {showGame2 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Donald')}>Donald</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Mickey')}>Mickey</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>Kairi</button>
                  </div>
                </>
              )}
              {showGame3 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Steve')}>Steve</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>Kairi</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>Riku</button>
                  </div>
                </>
              )}
              {showGame4 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>Riku</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Axel')}>Axel</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Xion')}>Xion</button>
                  </div>
                </>
              )}
              {showGame5 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Sheik')}>Sheik</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>luig</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>mariu</button>
                  </div>
                </>
              )}
              {showGame6 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Steve')}>linke</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>zelda</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>rob</button>
                  </div>
                </>
              )}
               {showGame7 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Sheik')}>gc</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>luig</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>mariu</button>
                  </div>
                </>
              )}
               {showGame8 && (
                <>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Sheik')}>gc</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Kairi')}>luig</button>
                  </div>
                  <div className="Row">
                    <button onClick={() => handleCharacterSelect('Riku')}>mariu</button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {showLittleTitle && (
        <div className="LittleTitle">
          <a href = "" >
          <img src="src/assets/git!.gif" alt="logo" /></a>
          <a href = "" >
          <img src="src/assets/log4.gif" alt="logo" /></a>
           <img className='logost' src="src/assets/logore.gif" alt="logo" />
        </div>
      )}

      <Canvas>
        <color attach="background" args={['#101010']} />
        {selectedCharacter === 'Goofy' && <Goofy />}
        {selectedCharacter === 'GoofyNo' && <GoofyNo />}
        {selectedCharacter === 'Sora' && <Sora />}
        {selectedCharacter === 'SoraNo' && <SoraNo />}
        {selectedCharacter === 'Donald' && <Donald />}
        {selectedCharacter === 'DonaldNo' && <DonaldNo />}
        {selectedCharacter === 'Mickey' && <Mickey />}
        {selectedCharacter === 'Kairi' && <Kairi />}
        {selectedCharacter === 'Riku' && <Riku />}
        {selectedCharacter === 'Axel' && <Axel />}
        {selectedCharacter === 'Xion' && <Xion />}
        {selectedCharacter === 'Sheik' && <Sheik />}
      </Canvas>
    </div>
  );
}

export default App;