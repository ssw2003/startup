import React from 'react';
import './playingscreen.css';

export function Playingscreen() {
  return (
    <div>
      <main >
            <table>
                <tr>
                    <td className="sideArea">
                        <p className="ppp">Side area</p>
                        <a href="https://github.com/ssw2003/startup" className="gitHubThing">GitHub</a>
                    </td>
                    <td className="middleArea">
                        <div className="ml"><p>_</p></div>
                        <div className="ml"><p>Marbles Left</p></div>
                        <div><table><tr><td><p>Make move</p></td><td><p>_</p>
                        <p>Number of marbles</p></td></tr></table></div>
                    </td>
                    <td className="endArea">
                        <p>Web Socket Area</p>
                    </td>
                </tr>
            </table>
        </main>
    </div>
  );
}