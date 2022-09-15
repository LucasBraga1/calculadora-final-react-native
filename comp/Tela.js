import React from 'react';
import {Text} from 'react-native';

const Tela = (props) => {
  return (
    <Text style={{
      padding:10,
      borderRadius:5,
      borderTopColor: '#ffffff',
      borderBottomColor: '#ffffff',
      borderWidth:2,
      textAlign:'right',
      fontSize:35,
      height:'20%',
      textAlignVertical:'bottom',
      margin: 0,
      color: '#ffffff'
    }}>{props.num}</Text>
  )
};

export default Tela;