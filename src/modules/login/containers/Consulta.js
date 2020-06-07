import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, View, List, ListItem, Thumbnail, Content } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
          
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Hyundai</Text>
                            <Text note>1967</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Fiat</Text>
                            <Text note>2007</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>nom</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>otro</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>valida</Text>
                            <Text note>2007</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Hyundai</Text>
                            <Text note>1967</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Fiat</Text>
                            <Text note>2007</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>nom</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>otro</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>valida</Text>
                            <Text note>2007</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Hyundai</Text>
                            <Text note>1967</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>Fiat</Text>
                            <Text note>2007</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>nom</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>otro</Text>
                            <Text note>2007</Text>
                        </ListItem>                        
                        <ListItem>
                            <Thumbnail source={require('../../../assets/image/settings.png')} />
                            <Text>valida</Text>
                            <Text note>2007</Text>
                        </ListItem>

                    </List>
                </Content>
            </Container>
            
      </Container>
    );
  }
}