import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {} from 'react-native';
const Botao = (props) =>{
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
      <Text style={{
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: props.cor,
        color: '#ffffff',
        padding: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 5,
        fontSize: 35,
        flex: 1
      }}>{props.texto}</Text>
    </TouchableOpacity>
  );
};
//cor='#1100F5'
Botao.defaultProps = {
  cor: "#000000"
};
export default Botao;