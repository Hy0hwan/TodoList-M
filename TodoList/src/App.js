import { StatusBar, Dimensions } from 'react-native';
import { Text, View } from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import { useState } from 'react';
import IconButton from './components/IconButton';
import { icons } from './icons';
import Task from './components/Task';


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`
const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
  /* width: 100%; */
`;


export default function App() {
  const width = Dimensions.get('window').width;
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    alert(newTask);
    setNewTask('');
  }

  return (
    <ThemeProvider theme={theme}>
    <Container>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor={theme.background}
      />
      <Title>TODO List</Title>
      <Input 
       placeholder= "검색"
       value={newTask}
       onChangeText={text => setNewTask(text)}
       onSubmitEditing ={addTask} 
      />
      <List width={width}>
        <Task text="ReactNative"/>
        <Task text="React"/>
        <Task text="Redasdad"/>
        <Task text="ReactNative"/>
        <Task text="React"/>
        <Task text="Redasdad"/>
      </List>
    </Container>
    </ThemeProvider>
  );
}


