
import { useContext } from 'react'
import LinkData from './link.js'

function Link1()
{
  let text=useContext(LinkData);
  return <a href="https://www.pesuacademy.com/Academy/">link 1</a>
}
function Link2()
{
  let text=useContext(LinkData);
  return <a href="https://www.youtube.com/">link 2</a>
}
function Link3()
{
  let text=useContext(LinkData);
  return <a href="https://mail.google.com">link 3</a>
}
function Links()
{
  return<>
  <LinkData.Provider value="ClickHere">
  <Link1/><br></br>
  <Link2/><br></br>
  <Link3/><br></br>
  </LinkData.Provider>
  </>
}
export default Links

