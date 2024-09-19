import React from 'react'
import { StyleSheet, View,Text, TextInput, ScrollView, FlatList } from 'react-native';
import SingleProduct from '../SingleProduct/SingleProduct';
import SingleDataInFeed from '../SingleProductInFeed/SingleDataInFeed';
import BigProductInFeed from '../BigProductInFeed/BigProductInFeed';

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

function Feed() {
    return (
        <View style={{ flex: 1 }}>
          <View style={styles.highBar}>
            <Text style={styles.backInHighBar}>Back</Text>
            <Text style={styles.contentInHighBar}>Feed</Text>
            <Text style={styles.filterInHighBar}>Filter</Text>
          </View>
          <TextInput style={styles.searchInput} placeholder="Search" />
    
          <View>
            <ScrollView>   
                <View> 
                  <FlatList data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<SingleDataInFeed data={item}/>)}></FlatList>
                 </View>
                <View> 
                  <FlatList data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<BigProductInFeed data={item}/>)}></FlatList>    
                 </View>  
            </ScrollView>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    highBar: {
      width: 343,
      height: 36,
      margin:"auto",
      marginTop: 60, // Absolute mövqeyini dəyişdirin və margin istifadə edin
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: "center",
    },
  
    backInHighBar: {
      color: "#5DB075",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 19,
      letterSpacing: 0,
      textAlign: "left",
    },
  
    contentInHighBar: {
      color: "#000000",
      fontSize: 30,
      fontWeight: "600",
      lineHeight: 36,
      letterSpacing: 0,
      textAlign: "center",
    },
  
    filterInHighBar: {
      color: "#5DB075",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 19,
      letterSpacing: 0,
      textAlign: "right",
    },
  
    searchInput: {
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderRadius: 100,
      backgroundColor: "#F6F6F6",
      margin:"auto",
      // marginLeft: 16,
      // marginRight: 16,
      width: 343,
      height: 50,
      marginTop: 20, // Yuxarı ilə məsafəni artırmaq üçün marginTop əlavə edin
      color: "#BDBDBD",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 19,
      textAlign: "left",
      padding: 16,
      marginBottom:16
    },
    headerInPhoto:{
      width:50,
      height:50,
      backgroundColor:"#F6F6F6",
      borderRadius:8,
      marginRight:16
    },
    singleHeader:{
      width:350,
      margin:"auto",
      display:"flex",
      flexDirection:"row",
      marginBottom:16
    },
    headerInAgoAndHeader:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:284,
      marginBottom:8
    },
    headerInHead:{
      fontSize:16,
      fontWeight:"600",
      lineHeight:19,
      width:57,
      height:19
    },
    headerInTime:{
      fontSize:14,
      fontWeight:400,
      lineHeight:17,
      color:"#BDBDBD",
      width:50,
      height:17,
    },
    headerInDescription:{
      fontSize:14,
      fontWeight:"400",
      lineHeight:17,
      width:269,
      height:34,
      marginBottom:16
    },
    bigHeader:{
      backgroundColor:"#F0F0F0",
      borderRadius:8,
      width:350,
      height:240,
      margin:"auto",
      marginBottom:8
    }
  });

export default Feed
