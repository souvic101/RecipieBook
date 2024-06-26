import './App.css';
import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';
import { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import styled from 'styled-components';
function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        
        <Logo to={"/"}>Delicious</Logo>

      </Nav>
      <Search></Search>
      <Category></Category>
      <Pages></Pages>
      </BrowserRouter>

    </div>
  );
}
const Logo=styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobstar Two',cursive;
`
const Nav=styled.div`
    padding: 4rem;
    display: flex;
    justify-content:flex-center;
    align-items: center;
    svg{
      font-size: 2rem;
    }

`
export default App;
