import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

function Home()
{
  return<h1> This is a Home Page </h1>
}

function About()
{
  return<h1> This is an About Page </h1>
}

function Gallery()
{
  return<h1> This is a Gallery Page </h1>
}

function App()
{
  return <>
  <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/gallery">Gallery</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

export default App;