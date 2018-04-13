import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Button, Container, Fab, Header, Icon, Left, Right, Title, View} from "native-base";


export default class TodoList extends React.Component {
   constructor(props) {
      super(props);
      // this.state = {}
   }

   render() {
      return (
         <Container>
            <Header>
               <Left>
                  <Button transparent onPress={this.props.goBack}>
                     <Icon name='arrow-back'/>
                  </Button>
               </Left>
               <Body>
               <Title>{this.props.todoListName}</Title>
               </Body>
               <Right/>
            </Header>
            <View></View>
            <Fab
               active={true}
               position="bottomRight">
               <Icon name="add" />
            </Fab>
         </Container>
      );
   }


}

const styles = StyleSheet.create({});
