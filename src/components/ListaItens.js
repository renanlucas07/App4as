import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import Itens from './Itens';
import styles from '../styles';

export default class ListaItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }
  
  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
         .then(response => {
            this.setState({ listaItens: response.data });
            console.log(response); 
          })
         .catch(() => { console.log('Erro ao recuperar dados!'); });
  }

  render() {
    const {
      title,
      list
    } = styles;
    return (
        <ScrollView contentContainerStyle={list}>
        <Text style={title}>Lista de Itens</Text>
          { this.state.listaItens.map((item, index) => ( 
            <Itens key={index}
                   titulo={item.titulo} 
                   valor={item.valor}
                   local={item.local_anuncio}
                   data={item.data_publicacao}
                   image={item.foto}
            /> 
          ))}
        </ScrollView>
    );
  }
}

