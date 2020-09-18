import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { boxes } from "./AllBoxes"
import Header from './components/Header';
import Text from './components/Text';
import { addDataPoint } from './server/api';
import MobileView from './components/MobileView';
import Button from './components/Button';
import { BucketTable } from './admin/Admin';


export default function ({ box, route, navigation }) {
  console.log('ps: ', route.params);
  console.log('box: ', box);
  const boxObj = boxes.find(b => b.id == route.params.box)
  console.log('boxes: ', boxes);

  const [answers, setAnswers] = useState({})
  const [screen, setScreen] = useState("entry")

  let lastIndexWithAnswer = boxObj.questions.length - [...boxObj.questions].reverse().findIndex(question => {
    if (answers[question.name]) {
      return true
    }
  })

  if (lastIndexWithAnswer > boxObj.questions.length) {
    lastIndexWithAnswer = -1
  }
  let finished = false
  if (lastIndexWithAnswer == boxObj.questions.length) {
    finished = true

  }

  console.log('lastIndexWithAnswer: ', lastIndexWithAnswer);

  const save = () => {
    addDataPoint(boxObj.id, answers)
    navigation.navigate('Home')
  }

  return (
    <MobileView>
      <Header text={boxObj.name}
        subtitle="↓ADDING A NEW ENTRY↓"
      >
      </Header>

      <View style={{
        flexDirection: "row"
      }}>
        <Button onPress={() => { setScreen("entry") }} text={"Add entry +"}></Button>
        <Button onPress={() => { setScreen("data") }} text={"Data [4]"}></Button>
        <Button text={"Alerts 🔕"}></Button>
      </View>

      {screen == "data" &&
        <BoxData box={boxObj} />

      }

      {screen == "entry" &&
        <View style={{
          backgroundColor: "#e7ece8",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23acacac' fill-opacity='0.21' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          padding: 30,
          flex: 1
        }}>
          {boxObj.questions.filter((q, i) => i <= (lastIndexWithAnswer + 1)).map((q) => (
            <Question
              answer={answers[q.name]}
              onSetAnswer={(a) => setAnswers({ ...answers, [q.name]: a })}
              key={q.name}
              question={q}
            />
          ))}

          {finished && <Button title="Save 💾" onPress={save}></Button>}
        </View>

      }


    </MobileView>
  );
}

const BoxData = ({ box }) => {
  // console.log('props: ', props.children);
  // const [chosen, setChosen] = useState(null)

  return (
    <View style={{
      padding: 30,
      flex: 1
    }}>
      <Text>Data:</Text>
      <BucketTable bucket={box} />
    </View>
  )
}


const Question = ({ question, answer, onSetAnswer }) => {
  // console.log('props: ', props.children);
  // const [chosen, setChosen] = useState(null)

  return (
    <View>
      <Bubble
        left
      >
        {question.name}
      </Bubble>
      {question.alternatives.map((alternative, i) => (

        <Bubble
          right
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

const Bubble = ({ ...props }) => {

  return (
    <View style={{ flexDirection: "row" }}>
      {props.right && <View style={{ flex: 1 }}></View>}
      <TouchableOpacity
        {...props}
        disabled={props.left}
        style={{
          backgroundColor: 'white',
          height: 40,
          justifyContent: 'center',
          borderRadius: 5,
          shadowOffset: { width: 3, height: 3 },
          shadowColor: 'gray',
          shadowOpacity: 1.0,
          marginVertical: 4,
          ...props.style,
        }}
      >
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{
            fontSize: 20
          }}>{props.children}</Text>
        </View>
      </TouchableOpacity>
      {props.left && <View style={{ flex: 1 }}></View>}
    </View>
  )
}