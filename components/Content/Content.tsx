import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderSingle from '../HeaderSingleInContent/HeaderSingle';

const products=[
    {
        id:1,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:2,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:3,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:4,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:5,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:6,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:7,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:8,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:9,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:10,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
    {
        id:11,
        header:"Header",
        description:"He'll want to use your yacht, and I don't want this thing smelling like fish.",
        image:"",
        time:"8m ago"
    },
];

function Content() {
  return (
    <View>
      <View style={{marginTop:"5%"}}>
        <FlatList data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<HeaderSingle data={item}/>)}></FlatList>
      </View>
    </View>
  )
}

export default Content
