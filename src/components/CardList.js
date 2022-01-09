import React from 'react';
import {Card} from './Card';

export function CardList(props) {
  const {info} = props;

  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">date</th>
        <th scope="col">status</th>
        <th scope="col">temperature</th>
        <th scope="col">humidity</th>
      </tr>
      </thead>
      <tbody>
      {info.map((info, index) => (
        <Card key={index} info={info}/>
      ))}
      </tbody>
    </table>
  );
}
