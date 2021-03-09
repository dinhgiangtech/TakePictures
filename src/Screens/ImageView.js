import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,Image,TouchableOpacity
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

  

export default class ImageView extends Component {
  savePicture=()=>{
    const path=RNFetchBlob.fs.dirs.CacheDir+"test/png";
    console.log('path',path)
    try{
      RNFetchBlob.fs.writeFile(path,this.props.route.params.img.base64,'base64')
    }
    catch(error){
      console.log(error.message);
    }
  }
    

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.preview}>
        <Image style={styles.img}  source={{uri:this.props.route.params.img.uri}}></Image>
        </View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.savePicture}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> Save </Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  img:{
    width:"100%",
    height:"100%",
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


