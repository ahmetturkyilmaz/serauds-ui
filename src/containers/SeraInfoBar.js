import React, {useState} from 'react';
import {Form} from '../components/Form';
import {CardList} from '../components/CardList';
import SeraNetwork from "../repository/SeraRepository";

export function SeraInfoBar(props) {
  const [infos, setInfos] = useState([]);
  const getInfo = (infoId) => {
    SeraNetwork.getInfo(infoId).then(res => {
      setInfos(res.statusList);
    });

    // [
    //   {
    //     date: moment(Date.now()).format('LLL'),
    //     status: "normal",
    //     temperature: 22,
    //     humidity: 13
    //   },
    //   {
    //     date: moment(Date.now() + 120001).format('LLL'),
    //     status: "critical",
    //     temperature: 42,
    //     humidity: 53
    //   },]
  };

  return (
    <div style={{paddingTop: 32}}>
      <div style={{height: 48, paddingLeft: 16, paddingRight: 16}}>
        <Form onSubmit={(distance) => getInfo(distance)}/>
      </div>
      <div
        style={{
          height: 'calc(100vh - 64px - 32px)',
          paddingTop: 12,
          overflow: 'auto',
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <CardList info={infos}/>
      </div>
    </div>
  );
}
