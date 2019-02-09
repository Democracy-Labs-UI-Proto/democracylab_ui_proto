import React, { Fragment } from 'react';
import TeamCard from './TeamCard';
import TeamPics from '../../assets/assets_export';

// TODO: have to create an array of images in the export for this to iterate over

export default function TeamDeck(props) {
  return (
    <Fragment>
      <h2 className="title small-space">Team</h2>
      <ul className="team-list container column big-space">
        {props.team.map((ele, idx) => (
          <TeamCard key={idx} img={TeamPics[idx]} teamitem={ele} />
        ))}
      </ul>
    </Fragment>
  );
}