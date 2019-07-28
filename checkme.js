import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Button,
    Icon,
    Left,
    Body,
    Right
           } from 'native-base';

export default class App extends React.Component {
  

  render (){
    return (
      <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://images.pexels.com/photos/2519392/pexels-photo-2519392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://images.pexels.com/photos/2519392/pexels-photo-2519392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
}

