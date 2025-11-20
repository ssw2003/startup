import React from 'react';
import './oops.css';

export function Oops({person}) {
  const [imageOops, setImageOops] = React.useState('');
  const [firstMarbleImage, setFirstMarbleImage] = React.useState('');
  const [secondMarbleImage, setSecondMarbleImage] = React.useState('');
  const [thirdMarbleImage, setThirdMarbleImage] = React.useState('');
  React.useEffect(() => {
    setImageOops(`oops_pic.png`);
    setFirstMarbleImage(`marble_pic_1.png`);
    setSecondMarbleImage(`marble_pic_2.png`);
    setThirdMarbleImage(`marble_pic_3.png`);
  }, []);
  return <div><main><table><tr id="hedr"><td id="hedr">
<table id="hedrtable"><tr id="higherhedr"><td id="higherhedr"><table id="secondhedrtable"><tr><td id="blnk"></td><td id="corner">{person}</td></tr></table></td></tr><tr id="lowhedr"><td>Oops</td></tr></table>
</td></tr><tr id="mdl"><td>
<table id="bdytbl"><tr><td id="sideArea"><p id="sda">Side Area</p><a href="https://github.com/ssw2003/startup" id="gith">GitHub</a></td><td id="OopsArea"><img src={imageOops} alt="[Oops Picture]" id="imageThingOops"></img></td></tr></table>
</td></tr><tr id="bttm"><td>
<table><tr><td id="ftr">[F             O             O             T             E             R]</td><td><img src={thirdMarbleImage} alt="[Media Marbles]" id="imageThing"></img></td><td id="lnk"><p>You had an oops and typed in something that doesn't show the main screen or Nim playing screen</p></td></tr></table>
</td></tr></table></main>

</div>;
}