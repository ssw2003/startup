import React from 'react';
import './nscr.css';
import './nscr_js.js';

export function Nscr({ person, clkDef, clkGen }) {
  const [imageOops, setImageOops] = React.useState('');
  const [vga, svga] = React.useState('');
  const [firstMarbleImage, setFirstMarbleImage] = React.useState('');
  const [secondMarbleImage, setSecondMarbleImage] = React.useState('');
  const [thirdMarbleImage, setThirdMarbleImage] = React.useState('');
  const [vq, sevq] = React.useState('_');
const [varthing, setvarthing] = React.useState('');
const [v1, sv1] = React.useState('');
  const textChangeUserName = React.useCallback( (e) => sv1(e.target.value) );
const [v2, sv2] = React.useState('');
const [vq0, svq0] = React.useState('https://bible-api.com/ruth+2:3');
const [vq1, svq1] = React.useState('Ruth 2:3');
const [r_quote, sr_quote] = React.useState('p');
const [k_quote, sk_quote] = React.useState('p');
const [e_quote, se_quote] = React.useState('p');
const [VQVQ, sVQVQ] = React.useState(person);
  const tcpa = React.useCallback((e) => sv2(e.target.value));
  React.useEffect(() => {
    setImageOops(`oops_pic.png`);
    setFirstMarbleImage(`marble_pic_1.png`);
    setSecondMarbleImage(`marble_pic_2.png`);
    setThirdMarbleImage(`marble_pic_3.png`);
    fetch('https://bible-api.com/ruth+2:3')
      .then((response) => response.json())
      .then((data) => {
        sr_quote(data.text);
      })
      .catch();
    fetch('https://bible-api.com/1kings+11:36')
      .then((response) => response.json())
      .then((data) => {
        sk_quote(data.text);
      })
      .catch();
    fetch('https://bible-api.com/esther+4:15')
      .then((response) => response.json())
      .then((data) => {
        se_quote(data.text);
      })
      .catch();
fetch('https://bible-api.com/ruth+2:3')
      .then((response) => response.json())
      .then((data) => {
        sevq(data.text);
      })
      .catch();
  }, []);function quoteGiver() {
let app = 0;
if (vq0 === 'https://bible-api.com/ruth+2:3') {app=1;svq0('https://bible-api.com/1kings+11:36');}
else if (vq0 === 'https://bible-api.com/1kings+11:36') { app=2; svq0('https://bible-api.com/esther+4:15');}
else {svq0('https://bible-api.com/ruth+2:3');}
if (vq1 === 'Ruth 2:3') {svq1('1 Kings 11:36');}
else if (vq1 === '1 Kings 11:36') {svq1('Esther 4:15');}
else {svq1('Ruth 2:3');}
if (app===0) {sevq(r_quote);} else if (app===1) {
sevq(k_quote);} else {
sevq(e_quote);
}
}
async function mkgm() {console.log("Reached here e");const response=await fetch(`/api/jp`,{method: 'post',
      body: JSON.stringify({  game_name: vga }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
      setvarthing("Successfully created " + vga + "!");
    } else {
const body = await response.json();
      setvarthing(body.msg + "FP" + response?.status);
    }};
async function lgmz() {const response=await fetch(`/api/lg`,{method: 'post',
      body: JSON.stringify({ user_name: VQVQ }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
const body = await response.json();
      setvarthing(body.msg);
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }};
async function jfp() { const response=await fetch(`/api/jfp`,{method: 'post',
      body: JSON.stringify({ user_name: VQVQ, game_name: vga }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {

      setvarthing("Successfully joined " + vga + "!");
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }};
async function jsp() {const response=await fetch(`/api/jsp`,{method: 'post',
      body: JSON.stringify({ user_name: VQVQ, game_name: vga }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
      setvarthing("Successfully joined " + vga + "!");
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }};
async function clkDefCombined() {const response=await fetch(`/api/so`,{method: 'delete',
      body: JSON.stringify({}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});setvarthing("");clkDef();
};async function clkMake() {const response=await fetch(`/api/regi`,{method: 'post',
      body: JSON.stringify({ user_name: v1, password: v2 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
      localStorage.setItem('userName', v1);
      clkGen(person, v1);
      setvarthing("Thanks!");
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }sVQVQ(v1);sv1("");sv2("");};function a() {sv1(v1 + "a");};function b() {sv1(v1 + "b");};function c() {sv1(v1 + "c");};
function _() {sv1(v1 + "_");};
function c_() {sv1(v1 + "-");};
function ca() {sv1(v1 + "'");};
function c_period() {sv1(v1 + ".");};
function cat() {sv1(v1 + "@");};
function camp() {sv1(v1 + "&");};
function _star() {sv1(v1 + "*");};
function c_cm() {sv1(v1 + ",");};
function car() {sv1(v1 + "^");};
function _dlr() {sv1(v1 + "$");};
function c0() {sv1(v1 + "0");};
function c1() {sv1(v1 + "1");};
function c2() {sv1(v1 + "2");};
function c3() {sv1(v1 + "3");};
function c4() {sv1(v1 + "4");};
function c5() {sv1(v1 + "5");};
function c6() {sv1(v1 + "6");};
function c7() {sv1(v1 + "7");};
function c8() {sv1(v1 + "8");};
function c9() {sv1(v1 + "9");};
function q() {sv1(v1 + "q");};
function w() {sv1(v1 + "w");};
function e() {sv1(v1 + "e");};
function r() {sv1(v1 + "r");};
function t() {sv1(v1 + "t");};
function y() {sv1(v1 + "y");};
function u() {sv1(v1 + "u");};
function i() {sv1(v1 + "i");};
function o() {sv1(v1 + "o");};
function p() {sv1(v1 + "p");};
function s() {sv1(v1 + "s");};
function d() {sv1(v1 + "d");};
function f() {sv1(v1 + "f");};
function g() {sv1(v1 + "g");};
function h() {sv1(v1 + "h");};
function j() {sv1(v1 + "j");};
function k() {sv1(v1 + "k");};
function l() {sv1(v1 + "l");};
function z() {sv1(v1 + "z");};
function x() {sv1(v1 + "x");};
function v() {sv1(v1 + "v");};
function n() {sv1(v1 + "n");};
function m() {sv1(v1 + "m");};
function O() {sv1(v1 + "O");};
function P() {sv1(v1 + "P");};
function T() {sv1(v1 + "T");};
function Y() {sv1(v1 + "Y");};
function U() {sv1(v1 + "U");};
function I() {sv1(v1 + "I");};
function Q() {sv1(v1 + "Q");};
function W() {sv1(v1 + "W");};
function E() {sv1(v1 + "E");};
function R() {sv1(v1 + "R");};
function L() {sv1(v1 + "L");};
function K() {sv1(v1 + "K");};
function J() {sv1(v1 + "J");};
function H() {sv1(v1 + "H");};
function G() {sv1(v1 + "G");};
function F() {sv1(v1 + "F");};
function D() {sv1(v1 + "D");};
function S() {sv1(v1 + "S");};
function A() {sv1(v1 + "A");};
function Z() {sv1(v1 + "Z");};
function X() {sv1(v1 + "X");};
function C() {sv1(v1 + "C");};
function V() {sv1(v1 + "V");};
function B() {sv1(v1 + "B");};
function N() {sv1(v1 + "N");};
function M() {sv1(v1 + "M");};
function cler_() {sv1("");}
function bksp_() {sv1(v1.slice(0, -1));}
function ap() {sv2(v2 + "a");};function bp() {sv2(v2 + "b");};function cp() {sv2(v2 + "c");};
function _p() {sv2(v2 + "_");};
function c_p() {sv2(v2 + "-");};
function cap() {sv2(v2 + "'");};
function c_periodp() {sv2(v2 + ".");};
function catp() {sv2(v2 + "@");};
function campp() {sv2(v2 + "&");};
function _starp() {sv2(v2 + "*");};
function c_cmp() {sv2(v2 + ",");};
function carp() {sv2(v2 + "^");};
function _dlrp() {sv2(v2 + "$");};
function c0p() {sv2(v2 + "0");};
function c1p() {sv2(v2 + "1");};
function c2p() {sv2(v2 + "2");};
function c3p() {sv2(v2 + "3");};
function c4p() {sv2(v2 + "4");};
function c5p() {sv2(v2 + "5");};
function c6p() {sv2(v2 + "6");};
function c7p() {sv2(v2 + "7");};
function c8p() {sv2(v2 + "8");};
function c9p() {sv2(v2 + "9");};
function qp() {sv2(v2 + "q");};
function wp() {sv2(v2 + "w");};
function ep() {sv2(v2 + "e");};
function rp() {sv2(v2 + "r");};
function tp() {sv2(v2 + "t");};
function yp() {sv2(v2 + "y");};
function up() {sv2(v2 + "u");};
function ip() {sv2(v2 + "i");};
function op() {sv2(v2 + "o");};
function pp() {sv2(v2 + "p");};
function sp() {sv2(v2 + "s");};
function dp() {sv2(v2 + "d");};
function fp() {sv2(v2 + "f");};
function gp() {sv2(v2 + "g");};
function hp() {sv2(v2 + "h");};
function jp() {sv2(v2 + "j");};
function kp() {sv2(v2 + "k");};
function lp() {sv2(v2 + "l");};
function zp() {sv2(v2 + "z");};
function xp() {sv2(v2 + "x");};
function vp() {sv2(v2 + "v");};
function np() {sv2(v2 + "n");};
function mp() {sv2(v2 + "m");};
function Op() {sv2(v2 + "O");};
function Pp() {sv2(v2 + "P");};
function Tp() {sv2(v2 + "T");};
function Yp() {sv2(v2 + "Y");};
function Up() {sv2(v2 + "U");};
function Ip() {sv2(v2 + "I");};
function Qp() {sv2(v2 + "Q");};
function Wp() {sv2(v2 + "W");};
function Ep() {sv2(v2 + "E");};
function Rp() {sv2(v2 + "R");};
function Lp() {sv2(v2 + "L");};
function Kp() {sv2(v2 + "K");};
function Jp() {sv2(v2 + "J");};
function Hp() {sv2(v2 + "H");};
function Gp() {sv2(v2 + "G");};
function Fp() {sv2(v2 + "F");};
function Dp() {sv2(v2 + "D");};
function Sp() {sv2(v2 + "S");};
function Ap() {sv2(v2 + "A");};
function Zp() {sv2(v2 + "Z");};
function Xp() {sv2(v2 + "X");};
function Cp() {sv2(v2 + "C");};
function Vp() {sv2(v2 + "V");};
function Bp() {sv2(v2 + "B");};
function Np() {sv2(v2 + "N");};
function Mp() {sv2(v2 + "M");};
function cler_p() {sv2("");}
function bksp_p() {sv2(v2.slice(0, -1));}
function vgaZp() {svga(vga+" ");}
function vgaBp() {svga(vga.slice(0,-1));}
function vgao() {svga(vga+"o");}
function vgaO() {svga(vga+"O");}
function vgap() {svga(vga+"p");}
function vgai() {svga(vga+"i");}
function vgau() {svga(vga+"u");}
function vgay() {svga(vga+"y");}
function vgat() {svga(vga+"t");}
function vgar() {svga(vga+"r");}
function vgae() {svga(vga+"e");}
function vgaw() {svga(vga+"w");}
function vgaq() {svga(vga+"q");}
function vgaQ() {svga(vga+"Q");}
function vgaW() {svga(vga+"W");}
function vgaE() {svga(vga+"E");}
function vgaR() {svga(vga+"R");}
function vgaT() {svga(vga+"T");}
function vgaY() {svga(vga+"Y");}
function vgaU() {svga(vga+"U");}
function vgaI() {svga(vga+"I");}
function vgaP() {svga(vga+"P");}
function vgaL() {svga(vga+"L");}
function vgaK() {svga(vga+"K");}
function vgaJ() {svga(vga+"J");}
function vgaH() {svga(vga+"H");}
function vgaG() {svga(vga+"G");}
function vgaF() {svga(vga+"F");}
function vgaD() {svga(vga+"D");}
function vgaS() {svga(vga+"S");}
function vgaA() {svga(vga+"A");}
function vgaZ() {svga(vga+"Z");}
function vgaX() {svga(vga+"X");}
function vgaC() {svga(vga+"C");}
function vgaV() {svga(vga+"V");}
function vgaB() {svga(vga+"B");}
function vgaN() {svga(vga+"N");}
function vgaM() {svga(vga+"M");}
function vgal() {svga(vga+"l");}
function vgak() {svga(vga+"k");}
function vgaj() {svga(vga+"j");}
function vgah() {svga(vga+"h");}
function vgag() {svga(vga+"g");}
function vgaf() {svga(vga+"f");}
function vgad() {svga(vga+"d");}
function vgas() {svga(vga+"s");}
function vgaa() {svga(vga+"a");}
function vgaz() {svga(vga+"z");}
function vgax() {svga(vga+"x");}
function vgac() {svga(vga+"c");}
function vgav() {svga(vga+"v");}
function vgab() {svga(vga+"b");}
function vgan() {svga(vga+"n");}
function vgam() {svga(vga+"m");}
async function clrthg() {const response=await fetch(`/api/sp`,{
method: 'post',
      body: JSON.stringify({ user_name: v1, password: v2 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
      localStorage.setItem('userName', v1);
      clkGen(person, v1);
setvarthing("Thanks!");
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }sVQVQ(v1);sv1("");sv2("");
};
async function thatLogInThing(){const response=await fetch(`/api/si`,{
method: 'post',
      body: JSON.stringify({ user_name: v1, password: v2 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },});
if (response?.status === 200) {
      localStorage.setItem('userName', v1);
      clkGen(person, v1);
setvarthing("Thanks!");
    } else {
const body = await response.json();
      setvarthing(body.msg);
    }sVQVQ(v1);sv1("");sv2("");};
  return (
    <div><main><table><tr id="hedr"><td id="hedr">
<table id="hedrtable"><tr id="higherhedr"><td id="higherhedr"><table id="secondhedrtable"><tr><td id="blnk"></td><td id="corner">{person}</td></tr></table></td></tr><tr id="lowhedr"><td>Welcome to Nim Marble Game</td></tr></table>
</td></tr><tr id="mdl"><td>
<table id="bdytbl"><tr><td id="sideArea"><p id="sda">Side Area</p><a href="https://github.com/ssw2003/startup" id="gith">GitHub</a></td><td id="middleArea">
<table><tr><td><p>{"Username: " + v1}</p><button onClick={a}>a</button><button onClick={b}>b</button><button onClick={c}>c</button><button onClick={d}>d</button><button onClick={e}>e</button><button onClick={f}>f</button><button onClick={g}>g</button><button onClick={h}>h</button><button onClick={i}>i</button><button onClick={j}>j</button><button onClick={k}>k</button><button onClick={l}>l</button><button onClick={m}>m</button><button onClick={n}>n</button><button onClick={o}>o</button><button onClick={p}>p</button><button onClick={q}>q</button><button onClick={r}>r</button><button onClick={s}>s</button><button onClick={t}>t</button><button onClick={u}>u</button><button onClick={v}>v</button><button onClick={w}>w</button><button onClick={x}>x</button><button onClick={y}>y</button><button onClick={z}>z</button><button onClick={A}>A</button><button onClick={B}>B</button><button onClick={C}>C</button><button onClick={D}>D</button><button onClick={E}>E</button><button onClick={F}>F</button><button onClick={G}>G</button><button onClick={H}>H</button><button onClick={I}>I</button><button onClick={J}>J</button><button onClick={K}>K</button><button onClick={L}>L</button><button onClick={M}>M</button><button onClick={N}>N</button><button onClick={O}>O</button><button onClick={P}>P</button><button onClick={Q}>Q</button><button onClick={R}>R</button><button onClick={S}>S</button><button onClick={T}>T</button><button onClick={U}>U</button><button onClick={V}>V</button><button onClick={W}>W</button><button onClick={X}>X</button><button onClick={Y}>Y</button><button onClick={Z}>Z</button><button onClick={c0}>0</button><button onClick={c1}>1</button><button onClick={c2}>2</button><button onClick={c3}>3</button><button onClick={c4}>4</button><button onClick={c5}>5</button><button onClick={c6}>6</button><button onClick={c7}>7</button><button onClick={c8}>8</button><button onClick={c9}>9</button><button onClick={_}>_</button><button onClick={c_}>-</button><button onClick={ca}>'</button><button onClick={c_period}>.</button><button onClick={c_cm}>,</button><button onClick={cat}>@</button><button onClick={_star}>*</button><button onClick={camp}>&</button><button onClick={car}>^</button><button onClick={_dlr}>$</button><button onClick={cler_}>CLEAR</button><button onClick={bksp_}>BACKSPACE</button></td></tr></table>
<table><tr><td><p>{"Password: " + "o".repeat(v2.length)}</p><button onClick={ap}>a</button><button onClick={bp}>b</button><button onClick={cp}>c</button><button onClick={dp}>d</button><button onClick={ep}>e</button><button onClick={fp}>f</button><button onClick={gp}>g</button><button onClick={hp}>h</button><button onClick={ip}>i</button><button onClick={jp}>j</button><button onClick={kp}>k</button><button onClick={lp}>l</button><button onClick={mp}>m</button><button onClick={np}>n</button><button onClick={op}>o</button><button onClick={pp}>p</button><button onClick={qp}>q</button><button onClick={rp}>r</button><button onClick={sp}>s</button><button onClick={tp}>t</button><button onClick={up}>u</button><button onClick={vp}>v</button><button onClick={wp}>w</button><button onClick={xp}>x</button><button onClick={yp}>y</button><button onClick={zp}>z</button><button onClick={Ap}>A</button><button onClick={Bp}>B</button><button onClick={Cp}>C</button><button onClick={Dp}>D</button><button onClick={Ep}>E</button><button onClick={Fp}>F</button><button onClick={Gp}>G</button><button onClick={Hp}>H</button><button onClick={Ip}>I</button><button onClick={Jp}>J</button><button onClick={Kp}>K</button><button onClick={Lp}>L</button><button onClick={Mp}>M</button><button onClick={Np}>N</button><button onClick={Op}>O</button><button onClick={Pp}>P</button><button onClick={Qp}>Q</button><button onClick={Rp}>R</button><button onClick={Sp}>S</button><button onClick={Tp}>T</button><button onClick={Up}>U</button><button onClick={Vp}>V</button><button onClick={Wp}>W</button><button onClick={Xp}>X</button><button onClick={Yp}>Y</button><button onClick={Zp}>Z</button><button onClick={c0p}>0</button><button onClick={c1p}>1</button><button onClick={c2p}>2</button><button onClick={c3p}>3</button><button onClick={c4p}>4</button><button onClick={c5p}>5</button><button onClick={c6p}>6</button><button onClick={c7p}>7</button><button onClick={c8p}>8</button><button onClick={c9p}>9</button><button onClick={_p}>_</button><button onClick={c_p}>-</button><button onClick={cap}>'</button><button onClick={c_periodp}>.</button><button onClick={c_cmp}>,</button><button onClick={catp}>@</button><button onClick={_starp}>*</button><button onClick={campp}>&</button><button onClick={carp}>^</button><button onClick={_dlrp}>$</button><button onClick={cler_p}>CLEAR</button><button onClick={bksp_p}>BACKSPACE</button></td></tr></table><p>Actions:</p><button onClick={clkMake}>MakeAccount</button><button onClick={thatLogInThing}>Log In</button><button onClick={clkDefCombined}>Log Out</button><p style={{whiteSpace: 'pre-wrap'}}>{varthing}</p>
<button onClick={quoteGiver}>See Inspiring Quote</button><p>{vq0}</p><p>{vq1}</p><p>{vq}</p><p><button onClick={clrthg}>Clear Database if you're the right person</button></p>
<p>{"Game Name: " + vga}</p>
<button onClick={vgaa}>a</button>
<button onClick={vgab}>b</button>
<button onClick={vgac}>c</button>
<button onClick={vgad}>d</button>
<button onClick={vgae}>e</button>
<button onClick={vgaf}>f</button>
<button onClick={vgag}>g</button>
<button onClick={vgah}>h</button>
<button onClick={vgai}>i</button>
<button onClick={vgaj}>j</button>
<button onClick={vgak}>k</button>
<button onClick={vgal}>l</button>
<button onClick={vgam}>m</button>
<button onClick={vgan}>n</button>
<button onClick={vgao}>o</button>
<button onClick={vgap}>p</button>
<button onClick={vgaq}>q</button>
<button onClick={vgar}>r</button>
<button onClick={vgas}>s</button>
<button onClick={vgat}>t</button>
<button onClick={vgau}>u</button>
<button onClick={vgav}>v</button>
<button onClick={vgaw}>w</button>
<button onClick={vgax}>x</button>
<button onClick={vgay}>y</button>
<button onClick={vgaz}>z</button>
<button onClick={vgaA}>A</button>
<button onClick={vgaB}>B</button>
<button onClick={vgaC}>C</button>
<button onClick={vgaD}>D</button>
<button onClick={vgaE}>E</button>
<button onClick={vgaF}>F</button>
<button onClick={vgaG}>G</button>
<button onClick={vgaH}>H</button>
<button onClick={vgaI}>I</button>
<button onClick={vgaJ}>J</button>
<button onClick={vgaK}>K</button>
<button onClick={vgaL}>L</button>
<button onClick={vgaM}>M</button>
<button onClick={vgaN}>N</button>
<button onClick={vgaO}>O</button>
<button onClick={vgaP}>P</button>
<button onClick={vgaQ}>Q</button>
<button onClick={vgaR}>R</button>
<button onClick={vgaS}>S</button>
<button onClick={vgaT}>T</button>
<button onClick={vgaU}>U</button>
<button onClick={vgaV}>V</button>
<button onClick={vgaW}>W</button>
<button onClick={vgaX}>X</button>
<button onClick={vgaY}>Y</button>
<button onClick={vgaZ}>Z</button>
<button onClick={vgaZp}>space</button>
<button onClick={vgaBp}>backspace</button>
<p></p>
<button onClick={mkgm}>Make Game</button>
<button onClick={jfp}>Join as First Player</button>
<button onClick={jsp}>Join as Second Player</button>
<button onClick={lgmz}>List Games</button>
</td><td id="endArea">

</td></tr></table>
</td></tr><tr id="bttm"><td>
<table><tr><td id="ftr">[F             O             O             T             E             R]</td><td><img src={firstMarbleImage} alt="[Media Marbles]" id="imageThing"></img></td><td id="lnk"><a href="https://www.cs.cmu.edu/~jdunietz/nim.html">Learn about how Nim works</a></td></tr></table>
</td></tr></table>
        </main></div>
  );
}