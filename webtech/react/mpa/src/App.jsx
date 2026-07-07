import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

function Home()
{
  return<h1> This is a Home Page </h1>
}

function Contact()
{
  return <h1> example@email.com </h1>
}
function Location()
{
  return <h1> Bangalore </h1>
}


function About()
{
  return<>
<h1> This is an About Page </h1>
<nav>
  <Link to='contact'>Contact</Link>
  <Link to='location'>Location</Link>
</nav>
<Outlet/>
  </>
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
      <Route path="/about" element={<About/>}>
        <Route path="contact" element={<Contact/>}/>
        <Route path="location" element={<Location/>}/>
      </Route>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

export default App;