import React, { Fragment } from 'react'
import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
  <Fragment>
    <Navbar />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </Fragment>
  )
}

export default App;
