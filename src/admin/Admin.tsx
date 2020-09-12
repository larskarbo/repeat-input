import React, { useState, useEffect } from 'react';
import { View, } from 'react-native';
import Text from '../components/Text';
import { boxes } from '../AllBoxes';
import { getBucketContents } from '../server/api';
import Table from 'rc-table';
import moment from "moment"
import './tablestyles.css'

export default function () {

  return (
    <View style={{
      flex: 1,
      height: 100,
      backgroundColor: "white",
      padding: 20,
    }}>
      <Text>🗃 Inputboxes:</Text>
      {boxes.map(b => (
        <Bucket key={b.id} bucket={b} />
      ))}
    </View>
  );
}

const Bucket = ({ bucket }) => {
  const [answers, setAnswers] = useState([])



  useEffect(() => {
    console.log('bucket.id: ', bucket.id);
    getBucketContents(bucket.id).then(a => {
      console.log('a: ', a);
      setAnswers(a.map(a => {
        return {
          ...a.data.answers,
          created: a.data.created,
          key: a.ref.value.id
        }
      }))
    })
  }, [bucket.id])

  const columns = [
    {
      title: 'Created at',
      dataIndex: 'created',
      key: 'created',
      width: 100,
      render: (asdf) => moment(asdf).fromNow(), //format("MMM Do hh:mm"),
    },
    ...bucket.questions.map(q => ({
      title: q.name,
      width: 200,
      key: q.name,
      dataIndex: q.name
    }))
  ];

  return (
    <View style={{
      marginVertical: 10
    }}>
      <Text style={{
        fontSize: 12,
        fontWeight: "bold",
        paddingBottom: 8
      }}>{bucket.name}</Text>
      <View>
        <Table columns={columns} data={answers} />
      </View>
    </View>
  )
}