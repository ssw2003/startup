import React from 'react';
import './nscr.css';

export function Nscr() {
  return (
    <main>
            <table>
                <tr>
                    <td className="sideArea">
                        <p className="ppp">Side Area</p>
                        <a href="https://github.com/ssw2003/startup">GitHub</a>
                    </td>
                    <td className="middleArea">
                        <div><button className="bttn">Sign Out</button></div>
                        <div><button className="bttn">Play Nim</button></div>
                        <div><button className="bttn">Make Game</button></div>
                        <div><button className="bttn">Join Game</button></div>
                        <div><table><tr><td><button className="bttn">Sign In</button></td><td><p>which will call the database</p></td></tr></table></div>
                        <div><button className="bttn">Are You First Or Second?</button></div>
                        <div><button className="bttn">Make Account</button></div>
                    </td>
                    <td className="endArea">
                        <div>
                            <p>Game Listing Area As well as for entering whether you're first, second, or observer</p>
                        </div>
                        <div>
                            <p>[This will call the database]</p>
                        </div>
                    </td>
                </tr>
            </table>
        </main>
  );
}