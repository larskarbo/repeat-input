import React, { useState, useEffect } from 'react';
import { getAllAnswers, addDataPoint } from "./server/api"
console.log('getAllAnswers: ', getAllAnswers);
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InputView from "./InputView"
import Header from "./Header"
import { Link } from '@react-navigation/native';

export const buckets = [
  {
    name: "🧺 Fibre intake",
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
    name: "🚽 On the toilet",
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


  return (
    <View>


      <>
        <Header>
          <Text>R I</Text>
        </Header>
        {buckets.map(b => (

            <Link key={b.name} to={"/buckets/"+b.id}>
              <View style={{
                paddingHorizontal: 30,
                paddingTop: 20,
              }}><Bubble>{b.name}</Bubble></View>
            </Link>
        ))}
      </>
    </View>
  );
}

export const Bubble = ({ ...props }) => {

  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: 'white',
        // height: 50,
        borderRadius: 5,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'gray',
        shadowOpacity: 1.0,
        marginVertical: 15,
        ...props.style,
      }}
    >
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{
          fontSize: 20
        }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
});
