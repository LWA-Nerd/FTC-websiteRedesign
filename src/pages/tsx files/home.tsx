import React from 'react';
import '../css/home.css';
import ShinyText from '../../components/TextAnimations/ShinyText/ShinyText';

function Home() {
  return (
    <div className="home bg-black">
      <div id='home-header' className='text-center'>
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
        <h3 className="text-white">FTC Team #24611</h3>
      </div>
    </div>
  );
}

export default Home;