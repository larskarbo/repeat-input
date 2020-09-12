import React, { useState, useEffect } from 'react';
import { getAllAnswers, addDataPoint } from "./server/api"
console.log('getAllAnswers: ', getAllAnswers);
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import InputView from "./InputView"
import Header from "./components/Header"
import { Link } from '@react-navigation/native';
import MobileView from './components/MobileView';
import Text from './components/Text';

export const boxes = [
  {
    name: "Test box",
    description: "Used for testing. Submit whatever.",
    icon: "🤡",
    id: "fjfidjisjdfij",
    questions: [
      {
        name: "What's up?",
        alternatives: [
          {
            name: "Lactulose",
          },
          {
            name: "Seeds",
          }
        ]
      },
      {
        name: "Heyyy",
        alternatives: [
          {
            name: "10 ml",
          },
          {
            name: "15 ml",
          },
          {
            name: "20 ml",
          }
        ]
      }
    ]
  },
  {
    name: "Fibre intake",
    description: "Record fibre intake",
    icon: "🧺",
    id: "asdf1234",
    questions: [
      {
        name: "Type",
        alternatives: [
          {
            name: "Lactulose",
          },
          {
            name: "Seeds",
          }
        ]
      },
      {
        name: "Amount",
        alternatives: [
          {
            name: "10 ml",
          },
          {
            name: "15 ml",
          },
          {
            name: "20 ml",
          }
        ]
      }
    ]
  },
  {
    name: "On the toilet",
    description: "Every time you are on toilet",
    icon: "🚽",
    id: "qwer4321",
    questions: [
      {
        name: "Timing",
        alternatives: [
          {
            name: "On routine",
          },
          {
            name: "Off routine",
          }
        ]
      },
      {
        name: "Pain",
        alternatives: [
          {
            name: "Painful!!!",
            value: 3,
          },
          {
            name: "A bit pain",
            value: 2,
          },
          {
            name: "No pain",
            value: 1
          }
        ]
      },
      {
        name: "Consistency",
        alternatives: [
          {
            name: "Super Hard",
            value: 4
          },
          {
            name: "Medium Hard (maybe soft after initial)",
            value: 3
          },
          {
            name: "Soft Consistent (best!)",
            value: 2
          },
          {
            name: "Super soft",
            value: 1
          }
        ]
      }
    ]
  }
]

export default function () {

  useEffect(() => {
    getAllAnswers().then(a => {
      console.log(a)
    })
    console.log('getAllAnswers: ', getAllAnswers);
  }, [])


  console.log('boxes: ', boxes);
  return (
    <MobileView>


      <Header text={"Inputboxes"}>
        
      </Header>
      <View style={{
        flex: 1,
        backgroundColor: 'rgb(236,236,236)'
      }}>
        {boxes.map(b => (

          <Link key={b.name} to={"/boxes/" + b.id}>
            <Element box={b}></Element>
          </Link>
        ))}
      </View>
    </MobileView>
  );
}


export const Element = ({ box }) => {

  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 15,
        flex: 1,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between"
      }}
    >
      <EmojiIcon icon={box.icon} />
      <View style={{
        paddingLeft: 25,
        justifyContent: "center",
        flex: 1,
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "bold"
        }}>{box.name}</Text>
        <Text style={{
          fontSize: 16,
          fontWeight: "300"
        }}>{box.description}</Text>

      </View>
      <View style={{
        paddingLeft: 25,
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "300",
          color: "#B7B7B7"
        }}>{box.lastSubmitted || "13:52"}</Text>
      </View>
    </View>
  )
}

export const EmojiIcon = ({ icon }) => {

  return (
    <View style={{
      borderWidth: 1,
      borderColor: "black",
      boxShadow: "0px 0px 2px black",
      borderRadius: 50,
      height: 50,
      width: 50,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Text style={{
        fontSize: 30,
      }}>{icon}</Text>
    </View>
  )

}


const styles = StyleSheet.create({
});
