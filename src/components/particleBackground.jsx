import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from '../assets/js/particle';

const ParticleBackground = () => {
  return (
    <Particles id='particles' params={particleConfig} />
  );
};

export default ParticleBackground;