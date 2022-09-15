import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Tela from './comp/Tela';
import Botao from './comp/Botao';

const App = () => {
  const [num,setNum] = useState('0');
  const [mem, setMem] = useState(0);
  const [pOp, setpOp] = useState("");
  
  const pressNum = (press) => {
    if (num == "0"){
      setNum(press);
    } else {
      setNum(num.concat(press))
    }
  }

  const ponto = () => {
    if(!num.includes(".")){
      if(num == "0"){
        setNum("0.");
      } else{
        setNum(num.concat("."));
      }
    }
  }

  const ac = () => {
    setNum("0");
  }

  const oper = (op) => {
    setMem(parseFloat(num));
    setNum("0");
    setpOp(op);
  }

  const igual = () =>{
    if(pOp == "+"){
      setNum(mem + parseFloat(num))
    }else if(pOp == "-"){
      setNum(mem - parseFloat(num))
    }else if(pOp == "*"){
      setNum(mem * parseFloat(num))
    }else if(pOp == "/"){
      setNum(mem / parseFloat(num)) 
    }
    setMem(0);
  }

  return (
    <View style={estilos.fundo}>
      <Tela num={num}/>
      <View style={estilos.linha}>
        <Botao texto='AC'  onPress={ac}/>
        <Botao texto='(  )'/>
        <Botao texto='%'   />
        <Botao texto='÷' onPress={() => oper('/')}/>
      </View>
      <View style={estilos.linha}>
        <Botao texto='7' onPress={()=> pressNum("7")}/>
        <Botao texto='8' onPress={()=> pressNum("8")}/>
        <Botao texto='9' onPress={()=> pressNum("9")}/>
        <Botao texto='x' onPress={() => oper('*')}/>
      </View>
      <View style={estilos.linha}>
        <Botao texto='4' onPress={()=> pressNum("4")}/>
        <Botao texto='5' onPress={()=> pressNum("5")}/>
        <Botao texto='6' onPress={()=> pressNum("6")}/>
        <Botao texto='-' onPress={() => oper('-')}/>
      </View>
      <View style={estilos.linha}>
        <Botao texto='1' onPress={()=> pressNum("1")}/>
        <Botao texto='2' onPress={()=> pressNum("2")}/>
        <Botao texto='3' onPress={()=> pressNum("3")}/>
        <Botao texto='+' onPress={() => oper('+')}/>
      </View>
      <View style={estilos.linha}>
        <Botao texto='.' onPress={ponto}/>
        <Botao texto='0' onPress={()=> pressNum("0")}/>
        <Botao texto='⇐'/>
        <Botao texto="=" onPress={igual} cor='#1100F5'/>
      </View>
    </View>
  );
};

export default App;

const estilos = StyleSheet.create({
  fundo: { 
    backgroundColor: '#000000',
    flex:1,
    padding:10
  },
  linha:{
    color:'#ffffff',
    flex: 1,
    flexDirection: 'row',
    textAlignVertical: 'center'
  },
});