import React from 'react';
import './nscr.css';
import './nscr_js.js';

export function Nscr({ person, clkBilly, clkBob, clkJoe, clkDef }) {
  const [imageOops, setImageOops] = React.useState('');
  const [firstMarbleImage, setFirstMarbleImage] = React.useState('');
  const [secondMarbleImage, setSecondMarbleImage] = React.useState('');
  const [thirdMarbleImage, setThirdMarbleImage] = React.useState('');
const [varthing, setvarthing] = React.useState('');
const [v1, sv1] = React.useState('');
  React.useEffect(() => {
    setImageOops(`oops_pic.png`);
    setFirstMarbleImage(`marble_pic_1.png`);
    setSecondMarbleImage(`marble_pic_2.png`);
    setThirdMarbleImage(`marble_pic_3.png`);
  }, []);
function clkfunction() {setvarthing("Now click \'Nim Playing Screen\'");}
function clkDefCombined() {
  clkDef();
setvarthing("");
};function clkMake() {
setvarthing("Thanks!");
sv1("");
};function a() {sv1(v1 + "a");};function b() {sv1(v1 + "b");};function c() {sv1(v1 + "c");};
  return (
    <div><main><table><tr id="hedr"><td id="hedr">
<table id="hedrtable"><tr id="higherhedr"><td id="higherhedr"><table id="secondhedrtable"><tr><td id="blnk"></td><td id="corner">{person}</td></tr></table></td></tr><tr id="lowhedr"><td>Welcome to Nim Marble Game</td></tr></table>
</td></tr><tr id="mdl"><td>
<table id="bdytbl"><tr><td id="sideArea"><p id="sda">Side Area</p><a href="https://github.com/ssw2003/startup" id="gith">GitHub</a></td><td id="middleArea">
<button onClick={clkBilly}>Log In As Billy</button>
<button onClick={clkBob}>Log In As Bob</button>
<button onClick={clkJoe}>Log In As Joe</button><p>
<button onClick={clkDefCombined}>Log Out</button></p>
<p>
<table><tr><td><button onClick={clkMake}>Make Account</button></td><td><p>{v1}</p><button onClick={a}>a</button><button onClick={b}>b</button><button onClick={c}>c</button></td></tr></table></p><p>{varthing}</p>
<button onClick={clkfunction}>Play Nim</button><button onClick={clkfunction}>Make Game</button><button onClick={clkfunction}>Join Game</button><button onClick={clkfunction}>Are you First or Second?</button>
</td><td id="endArea">

</td></tr></table>
</td></tr><tr id="bttm"><td>
<table><tr><td id="ftr">[F             O             O             T             E             R]</td><td><img src={firstMarbleImage} alt="[Media Marbles]" id="imageThing"></img></td><td id="lnk"><a href="https://www.cs.cmu.edu/~jdunietz/nim.html">Learn about how Nim works</a></td></tr></table>
</td></tr></table>
        </main></div>
  );
}