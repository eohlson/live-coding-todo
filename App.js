import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Spinner} from 'native-base'
import ChooseTodo from "./src/ChooseTodo";
import {Font} from 'expo'
import TodoList from "./src/TodoList";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         fontLoaded: false,
         showTodo: false,
         currentTodo: ""
      };
   }

   async componentDidMount() {
      await Font.loadAsync({
         Roboto: require("native-base/Fonts/Roboto.ttf"),
         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({fontLoaded: true});

   }

   openNewTodo= (todo)  => {
      this.setState({showTodo: true, currentTodo: todo})
   }

   toTodoNaming = () => {
      this.setState({showTodo: false, currentTodo: ""})
   }


   showMainComponent() {
      if (this.state.showTodo) {
         return (<TodoList todoListName={this.state.currentTodo} goBack={this.toTodoNaming} />);
      } else {
         return <ChooseTodo openNewTodo={this.openNewTodo} />
      }
   }

   render() {
      if (this.state.fontLoaded) {
         return (
            this.showMainComponent()
         );
      } else {
         return <Text>Waiting</Text>
      }
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
