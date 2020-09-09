import React, { useState, useEffect } from 'react';
import { View, } from 'react-native';
import Text from '../stock/Text';
import { buckets } from '../AllBuckets';
import { getBucketContents } from '../server/api';


export default function () {

  return (
    <View style={{
      flex: 1,
      height: 100,
      backgroundColor: "white",
      padding: 20,
    }}>
      <Text>Admin panel</Text>
      {buckets.map(b => (
        <Bucket key={b.id} bucket={b}>
        </Bucket>
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
      setAnswers(a)
    })
  }, [bucket.id])

  return (
    <View key={bucket.id}>
      <Text>{bucket.name}</Text>
      <View>
        <Row columns={["created", ...bucket.questions.map(q => q.name)]} />
        {answers.map(a => {
          console.log(a.data.answers)
          const values = Object.keys(a.data.answers).map(function (key) {
            return a.data.answers[key];
          });
          return (
            <Row key={a.ts} columns={values} />

          )
        })}
      </View>
    </View>
  )
}

const Row = ({ columns }) => (
  <View style={{
    flexDirection: "row"
  }}>

    {columns.map((c, i) => (
      <View key={i}>
        <Text>{c}</Text>
      </View>
    ))}
  </View>
)