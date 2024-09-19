import React from 'react'
import { View ,Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import SingleProduct from '../SingleProduct/SingleProduct';
import SingleTrending from '../SingleTrending/SingleTrending';

const products=[
    {
        id:1,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:2,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:3,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:4,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:5,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:6,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:7,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:8,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:9,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:10,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
    {
        id:11,
        description:"Item #1 Name Goes Here",
        image:"",
        price:19.99
    },
];

function Market() {
  return (
    <View>
      <View style={styles.headBackground}>
        <View style={styles.headView}>
           <Text style={styles.backText}>Back</Text>
           <Text style={styles.marketText}>Market</Text>
        </View>
        <View style={styles.videoView}></View>
      </View>
      <ScrollView>
         <View style={{marginBottom:20}}>
           <Text style={styles.hotDealsText}>Hot deals</Text>
           <FlatList horizontal={true} data={products}  keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<SingleProduct data={item}/>)}></FlatList>
         </View>

         <View>
           <Text style={styles.hotDealsText}>Tending</Text>
           <FlatList horizontal={true} data={products} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<SingleTrending data={item} />)}></FlatList>
         </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    backText:{
        fontSize:16,
        fontWeight:"500",
        lineHeight:19,
        color:"white"
        // width:38,
        // height:19,
    },
    marketText:{
        fontSize:30,
        fontWeight:"600",
        lineHeight:36,
        color:"white"
    },
    headBackground:{
        backgroundColor:"#5DB075",
        width:"100%",
        height:360,
        marginBottom:32
    },
    headView:{
        width:"60%",
        marginLeft:"3%",
        marginTop:"3%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:32
    },
    videoView:{
        backgroundColor:"#FFFFFF",
        width:343,
        height:200,
        margin:"auto",
        borderRadius:12
    },
    hotDealsText:{
        fontSize:24,
        fontWeight:"500",
        lineHeight:29,
        marginLeft:16,
        marginBottom:16
    },
    singleDataInDescription:{
        fontSize:14,
        fontWeight:"400",
        lineHeight:17,
        width:110,
    },
    singleDataInPrice:{
        fontSize:14,
        fontWeight:"600",
        lineHeight:17,
    },
    singleDataInImage:{
        backgroundColor:"#F6F6F6",
        width:110,
        height:110
    },
    allSingleDataView:{
        margin:"auto",
        flexDirection:"row",
        width:"93%",
        justifyContent:"space-between"
    }
})

export default Market
