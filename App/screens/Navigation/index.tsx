import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomTab01 from '../../assets/icons/lotte_bottomTab01.svg';
import BottomTab02 from '../../assets/icons/lotte_bottomTab02.svg';
import BottomTab03 from '../../assets/icons/lotte_bottomTab03.svg';
import BottomTab04 from '../../assets/icons/lotte_bottomTab04.svg';
import BottomTab05 from '../../assets/icons/lotte_bottomTab05.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Home from '../Home';
import Schedule from '../\bSchedule';
import Event from '../Event';
import Reservation from '../Reservation';
import Mypage from '../Mypage';
import Menu from '../Menu';

const Aaa = styled.View`
  display: flex;
  justify-content: space-between;
  width: 50px;
  height: 100px;
  background-color: pink;
`;

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: focused ? '#FF243E' : '#000000',
              }}>
              {focused ? route.name : route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused}) => {
          if (route.name === '이벤트') {
            return focused ? (
              <BottomTab01 color={'#FF243E'} />
            ) : (
              <BottomTab01 color={'#000000'} />
            );
          } else if (route.name === '상영시간표') {
            return focused ? (
              <BottomTab02 color={'#FF243E'} />
            ) : (
              <BottomTab02 color={'#000000'} />
            );
          } else if (route.name === '바로예매') {
            return focused ? (
              <Aaa>
                <BottomTab03 color={'#FF243E'} />
              </Aaa>
            ) : (
              <Aaa>
                <BottomTab03 color={'#000000'} />
              </Aaa>
            );
          } else if (route.name === '마이') {
            return focused ? (
              <BottomTab04 color={'#FF243E'} />
            ) : (
              <BottomTab04 color={'#000000'} />
            );
          } else if (route.name === '메뉴') {
            return <BottomTab05 />;
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarItemStyle: {display: 'none'}}}
      />
      <Tab.Screen name="이벤트" component={Event} />
      <Tab.Screen name="상영시간표" component={Schedule} />
      <Tab.Screen
        name="바로예매"
        component={Reservation}
        options={{
          tabBarItemStyle: {
            marginBottom: 10,
            borderRadius: 10,
            bottom: 10,
          },
        }}
      />
      <Tab.Screen name="마이" component={Mypage} />
      <Tab.Screen name="메뉴" component={Menu} />
    </Tab.Navigator>
  );
};

const Navigtion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigtion;
