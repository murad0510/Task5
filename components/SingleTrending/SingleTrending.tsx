import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

function SingleTrending({data}:any) {
    return (
        <View style={styles.allSingleDataView}>
        <View>
            <View style={styles.singleDataInImage}></View>
            <Text style={styles.singleDataInDescription}>{data.description}</Text>
            <Text style={styles.singleDataInPrice}>$ {data.price}</Text>
        </View>
      </View>
  )
}

const styles=StyleSheet.create({
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
        marginLeft:16
        // flexDirection:"row",
        // width:"93%",
        // justifyContent:"space-between"
    }
})

export default SingleTrending
