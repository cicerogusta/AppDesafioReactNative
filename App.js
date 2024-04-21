import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import React, {Component} from "react";
import {Picker} from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
import {Switch} from "react-native";
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sexos:[
        {key: 1, sexo:'Masculino'},
        {key: 2, sexo:'Feminino'}
      ],
      nome:'',
      idade:'',
      sexo:0,
      limite:0,
      estudante:false


    }
    this.entrar = this.entrar.bind(this)
  }

  entrar() {
    let estudante = 'Não'
    if (this.state.nome === '' || this.state.idade === '' || this.state.limite === 0) {
      alert('Por favor preencha os campos: nome, idade, limite')
    } else {
      if (this.state.estudante === true) {
        alert('Dados do usuário \n' + `nome: ${this.state.nome} \n` + `idade: ${this.state.idade.toString()} \n` + `limite: ${this.state.limite.toString()} \n` + 'Estudante: Sim')
      } else {
        alert('Dados do usuário \n' + `nome: ${this.state.nome} \n` + `idade: ${this.state.idade.toString()} \n` + `limite: ${this.state.limite.toString()} \n` + 'Estudante: Não')

      }
    }
  }
  render() {
    let sexoItem = this.state.sexos.map((v, key) => {
      return <Picker.Item key={key} value={key} label={v.sexo}/>
    })
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.textoLogo}>Banco React</Text>

            <View>
              <TextInput placeholder={'Digite seu Nome'} style={styles.input} onChangeText={(valorNome) => {this.setState({nome: valorNome})}}></TextInput>
              <TextInput placeholder={'Digite sua Idade'} style={styles.input} onChangeText={(valorIdade) => {this.setState({idade: valorIdade})}}></TextInput>
              <Picker selectedValue={this.state.sexo}
                      onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                {sexoItem}
              </Picker>
              <View>
                <Text>Seu limite: R${this.state.limite.toFixed(2)}</Text>
                <Slider minimumValue={0} maximumValue={2000} onValueChange={(limiteSelecionado) => this.setState({limite: limiteSelecionado})} value={this.state.limite}/>
                <Text style={{marginTop:15}}>Estudante</Text>
                <Switch value={this.state.estudante} onValueChange={(valorSwitch) => {
                  this.setState({estudante: valorSwitch})
                }} thumbColor={'blue'} style={{marginTop:-30}}/>
                <TouchableOpacity style={styles.btn} onPress={() => {this.entrar()}}>
                  <Text style={{color:'#FFF', textAlign:'center'}}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoLogo: {
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  input: {
    borderRadius:18,
    fontSize:20,
    fontWeight:'bold',
    borderWidth:2,
    margin:8,
    padding:8
  },
  btn:{
    backgroundColor:'blue',
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding:8,
    borderRadius:18
  }
});
