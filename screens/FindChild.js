import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Platform,
    TextInput,
  } from "react-native";
  import {Header,Icon,Card, Avatar} from 'react-native-elements';
  import * as ImagePicker from 'expo-image-picker';
  import firebase from 'firebase';

  export default class FindChild extends Component{
      constructor(){
          super();
          this.state={
              Image: ''
          }
      }
     pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
        //   setImage(result.uri);
        // alert('Image not selected')
        this.setState({
            Image:uri
        })
        }
      };

      uploadImage= async()=>{
          var response = await fetch(uri);
          var blob = await response.blob();
          var ref  = firebase.storage().ref().child()
      }

      render(){
          return(
              <View style={{flex:1}}>
                <Header
                   leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
                   centerComponent={{ text: 'Find Child', style: { color: '#000', fontSize:20,fontWeight:"bold", } }}
                   backgroundColor='#fff'
                 />
                  <ImageBackground source={require('../assets/HomeImg.jpg')} style={styles.image}>
                 <TouchableOpacity style={styles.button} onPress={()=>{this.pickImage();}}>
                     <Text style={styles.buttonText}>Pick Image Of the kidnapped Child</Text>
                 </TouchableOpacity>
                 <Avatar
                 source ={{
                     uri: this.state.Image
                 }}
                 size='xlarge'
                 />
                  </ImageBackground>
              </View>
          );
      }
  }  const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   card:{
    flex:1,
    alignItems: 'Right',
    justifyContent: 'right'
  },
   formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#000',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center',
    fontWeight: 'bold'
  },
  attribute :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center',
    color: '#000'
  },
  cardtitle :{
    flex:1,
    fontSize: 35,
    justifyContent:'center',
    alignItems:'center',
    fontStyle: 'Bold',
  },
  button:{
    width:"85%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    marginLeft: 15,
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    buttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})

