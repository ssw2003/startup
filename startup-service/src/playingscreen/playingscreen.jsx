import React from 'react';
import './playingscreen.css';

export function Playingscreen({person}) {
  const [imageOops, setImageOops] = React.useState('');
  const [firstMarbleImage, setFirstMarbleImage] = React.useState('');
  const [secondMarbleImage, setSecondMarbleImage] = React.useState('');
  const [thirdMarbleImage, setThirdMarbleImage] = React.useState('');
  const [coolSport, setCoolSport] = React.useState('Basketball');
  React.useEffect(() => {
    setImageOops(`oops_pic.png`);
    setFirstMarbleImage(`marble_pic_1.png`);
    setSecondMarbleImage(`marble_pic_2.png`);
    setThirdMarbleImage(`marble_pic_3.png`);
  }, []);
const [numb, subtract] = React.useState(100);
const r1m = () => {if (numb === 0) {subtract(100);} else {subtract(numb - 1)};};
const r2m = () => {if (numb === 0) {subtract(100);} else if (numb === 1) {subtract(0);} else {subtract(numb - 2)};};
const r3m = () => {if (numb === 0) {subtract(100);} else if (numb === 1) {subtract(0);} else if (numb === 2) {subtract(0);} else {subtract(numb - 3);
React.useEffect(() => {if (numb % 4 ===0) {setCoolSport('Volleyball');} else {setCoolSport('Basketball');}}, []);}};
  return (
    <div>
      <main ><table><tr id="hedr"><td id="hedr">
<table id="hedrtable"><tr id="higherhedr"><td id="higherhedr"><table id="secondhedrtable"><tr><td id="blnk"></td><td id="corner">{person}</td></tr></table></td></tr><tr id="lowhedr"><td>Top Area</td></tr></table>
</td></tr><tr id="mdl"><td>
<table id="bdytbl"><tr><td id="sideArea"><p id="sda">Side area</p><a href="https://github.com/ssw2003/startup" id="gith">GitHub</a></td><td id="middleArea">
<p>Marbles left:</p><p>{numb}</p><button onClick={r1m}>Remove 1 marble</button><button onClick={r2m}>Remove 2 marbles</button><button onClick={r3m}>Remove 3 marbles</button></td><td id="endArea"></td></tr></table>
</td></tr><tr id="bttm"><td>
<table><tr><td id="ftr">[F             O             O             T             E             R]</td><td><img src={secondMarbleImage} alt="[Media Marbles]" id="imageThing"></img></td><td id="lnk"><a href="https://en.wikipedia.org/wiki/Nim">Learn about Nim and how it works</a></td></tr></table>
</td></tr></table></main>
    </div>
  );
}