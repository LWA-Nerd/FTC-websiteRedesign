import React from 'react';
import '../css/home.css';
import DecryptedText from '../../../public/TextAnimations/DecryptedText/DecryptedText.tsx';

function Home() {
  const name = "Robothletes";

  return (
    <div className="home bg-black">
      <div id="home-header" className="text-center font-bold">
        {name.split('').map((char, index) => (
          <DecryptedText
            key={index}
            text={char} //Imma still try this out
            speed={(200 / name.length) * index} 
            maxIterations={20}
            characters="ABC123!?"
            className="revealed title"
            parentClassName="all-letters"
            encryptedClassName="encrypted title"
            animateOn="view"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
