import {React,useState} from 'react'

const Home = () => {
    const [flag, setflag] = useState(false);
    setTimeout(() => {
        setflag(true);
    }, 2000);
  return (
    <div>
    {flag && <h1>This is Home</h1>}
    </div>
  )
}

export default Home
