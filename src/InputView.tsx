import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Bubble, buckets } from "./AllBuckets"
import Header from './Header';
import Text from './stock/Text';
import { addDataPoint } from './server/api';


export default function ({ bucket, route, navigation }) {
  console.log('ps: ', route.params);
  console.log('bucket: ', bucket);
  const bucketObj = buckets.find(b => b.id == route.params.bucket)
  console.log('buckets: ', buckets);

  const [answers, setAnswers] = useState({})

  const save = () => {
    addDataPoint(bucketObj.id, answers)
    navigation.navigate('Home')
  }

  return (
    <View>
      <Header>
        <Text>{bucketObj.name}</Text>
      </Header>
      <View style={{
        backgroundColor: "#CEF2F4",
        padding: 30
      }}>
        {bucketObj.questions.map(q => (
          <Question
            answer={answers[q.name]}
            onSetAnswer={(a) => setAnswers({ ...answers, [q.name]: a })}
            key={q.name}
            question={q}
          />
        ))}

      </View>

      <Bubble onPress={save}>Save 💾</Bubble>

    </View>
  );
}


const Question = ({ question, answer, onSetAnswer }) => {
  // console.log('props: ', props.children);
  // const [chosen, setChosen] = useState(null)

  return (
    <View>
      <Text>{question.name}</Text>
      {question.alternatives.map((alternative, i) => (

        <Bubble
          key={i}
          onPress={() => onSetAnswer(alternative.name)}
        >
          {answer == alternative.name && "✅ "}
          {alternative.name}
        </Bubble>
      ))}
    </View>
  )
}