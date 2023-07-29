import {React,useState} from 'react'

const About = () => {
    const [flag, setflag] = useState(false);
    setTimeout(() => {
        setflag(true);
    }, 1000);
  return (
    <div>
    {flag && <h1>This is About</h1>}
    </div>
  )
}

export default About;
