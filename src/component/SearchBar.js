/* eslint-disable prettier/prettier */
//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
//import all the components we are going to use.

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: false, text: '',dataSource:
    [
      {
        "title" :"No-Category",
        "icon":"ios-help-circle-outline",
        date : "10-02-2017"
    },
    {
        "title" :"Bars and Alcohol",
        "icon":"ios-beer",
        date : "15-07-2016"
    },
    {
        "title" :"Clothing",
        "icon":"ios-shirt",
        date : "18-03-2009"
    }
    ,{
        "title" :"Education",
        "icon":"ios-school",
        date : "24-09-2013"
    }
    ]

};
    this.arrayholder = [
        {
            "title" :"No-Category",
            "icon":"ios-help-circle-outline",
            date : "10-02-2017"
        },
        {
            "title" :"Bars and Alcohol",
            "icon":"ios-beer",
            date : "15-07-2016"
        },
        {
            "title" :"Clothing",
            "icon":"ios-shirt",
            date : "18-03-2009"
        }
        ,{
            "title" :"Education",
            "icon":"ios-school",
            date : "24-09-2013"
        }
    ];
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    var newData;
    if(Number.isNaN(parseInt(text))){
     newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
  }else{
     newData = this.arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.date;
        const textData = text
        return itemData.indexOf(textData) > -1;
      });
  }
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <View style = {{flexDirection:'row'}}>
            <Text style={styles.textStyle1}>{item.title}</Text>
           <Text style={styles.textStyle2}>{item.date}</Text>
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle1: {
    padding: 10,
    
   // alignSelf:'flex-start'
  },
  textStyle2: {
    padding: 10,
    alignSelf:'flex-end'
   // flexDirection:'row-reverse'
  // alignSelf:'flex-end'
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});