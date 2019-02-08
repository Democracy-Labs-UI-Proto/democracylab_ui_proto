import React from 'react';
import HeroCard from './HeroCard';

export default function HeroDeck(props) {
  return (
    <div className="container column">
      <HeroCard hero={props.hero} />
    </div>
  );
}
