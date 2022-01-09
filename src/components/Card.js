import React, {useState} from 'react';

export const Card = (props) => {
  const {info} = props;

  const tableVal = () => {
    if (info.status === "critical") {
      return (
        <tr className="table-danger">
          <td>{info.date}</td>
          <td>{info.status}</td>
          <td>{info.temperature}</td>
          <td>{info.humidity}</td>
        </tr>)
    }
    if (info.status === "normal") {
      return (
        <tr>
          <td>{info.date}</td>
          <td>{info.status}</td>
          <td>{info.temperature}</td>
          <td>{info.humidity}</td>
        </tr>)
    }
  }
  return tableVal()
};
