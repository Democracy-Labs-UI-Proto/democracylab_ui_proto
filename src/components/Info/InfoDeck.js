import React, { Fragment } from 'react';
import InfoCard from './InfoCard';

export default function InfoDeck(props) {
  return (
    <Fragment>
      <h2 className="title small-space">{props.info.infotitle}</h2>
      <ul className="info-list container big-space">
        {props.info.infolist.map((ele, idx) => (
          <InfoCard key={idx} infoitem={ele} />
        ))}
      </ul>
    </Fragment>
  );
}
