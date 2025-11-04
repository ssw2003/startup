import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './private.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Nscr } from './nscr/nscr';
import { Playingscreen } from './playingscreen/playingscreen';

export default function Private() {
  return (
    <BrowserRouter>
    <div>
      <header>
<table><tr><td className="crnr"></td><td className="corner">Username</td></tr></table>
        <nav>
          <menu className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Main Screen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="playingscreen">
                Nim Playing Screen
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <main><Routes>
  <Route path='/' element={<Nscr />} exact />
  <Route path='/playingscreen' element={<Playingscreen />} />
  <Route path='*' element={<NotFound />} />
</Routes></main>

      <footer>
            <table><tr><td>[F             O             O             T             E             R]</td>
            <td><img src="marble_pic_1.png" alt="[Media Marbles]"></img></td>
            <td><a href="https://www.cs.cmu.edu/~jdunietz/nim.html">Learn about how Nim works</a></td>
            <td><img src="marble_pic_2.png" alt="[Media Marbles]"></img></td></tr></table>
        </footer>
    </div>
    </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}