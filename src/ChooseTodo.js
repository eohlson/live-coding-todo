import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Button, Container, Content, Form, Header, Input, Item, Label, Text, Title} from "native-base";


export default class ChooseTodo extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         todoText: ""

      }
   }

   render() {
      return (
         <Container>
            <Container>
               <Header>
                  <Body>
                  <Title>Open new todo</Title>
                  </Body>
               </Header>
               <Content>
                  <Form>
                     <Item stackedLabel>
                        <Label>ListName</Label>
                        <Input onChangeText={(todoText) => this.setState({todoText})}
                               value={this.state.todoText}/>
                     </Item>

                  </Form>
                  <Button block onPress={() => this.props.openNewTodo(this.state.todoText)}>
                     <Text>Create new list</Text>
                  </Button>
               </Content>
            </Container>
         </Container>
      );
   }


}

const styles = StyleSheet.create({});
