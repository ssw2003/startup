import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Nscr } from './nscr/nscr';
import { Playingscreen } from './playingscreen/playingscreen';
import { Oops } from './oops/oops';
import { Javafile } from './javafile'

export default function Private() {
const [person, setPsn] = React.useState('Username');

  return (
    <BrowserRouter>
    <body style={{backgroundColor: '#ff7fff'}}><div>
      <header style={{backgroundColor: '#ff7fff'}}>
        <nav>
          <menu className="navbar-nav"><table style={{height: '55px'}}><tr><td style={{width: '120px'}}>
            <li className="nav-item" style={{color: '#7f007f'}}>
              <NavLink className="nav-link" to="" style={{textDecoration: 'underline'}}>Main Screen</NavLink>
            </li></td><td>
            <li className="nav-item" style={{color: '#7f007f'}}>
              <NavLink className="nav-link" to="playingscreen"  style={{textDecoration: 'underline'}}>Nim Playing Screen
              </NavLink>
            </li></td></tr></table>
          </menu>
        </nav>
      </header>

      <main style={{backgroundColor: '#ffff7f', height: 'calc(100vh - 71px)'}}><Routes>
  <Route path='/' element={<Nscr person={person} clkBilly={(person)=>{setPsn('Billy');}} clkBob={(person)=>{setPsn('Bob');}} clkJoe={(person)=>{setPsn('Joe');}} clkDef={(person)=>{setPsn('Username');}} />} exact />
  <Route path='/playingscreen' element={<Playingscreen person={person} />} />
  <Route path='*' element={<Oops person={person} />} />
</Routes></main>


    </div></body>
    </BrowserRouter>
  );
}