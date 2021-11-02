import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import detailScreen from '../screens/detailScreen';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../variables/colors';
import {TouchableOpacity} from 'react-native';

const Navigation = createNativeStackNavigator();

const Detail = ({route, navigation: {navigate}}) => {
  const {
    params: {contents},
  } = route;
  return (
    <Navigation.Navigator>
      <Navigation.Screen
        name={contents.hcnt_name}
        component={detailScreen}
        initialParams={{contents: contents}}
        options={{
          headerStyle: {backgroundColor: colors.orangeRed},
          headerTitleStyle: {color: 'white', fontSize: 20},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigate('Category');
              }}>
              <Icon
                name="chevron-left"
                size={34}
                color="white"
                style={{marginLeft: -20}}
              />
            </TouchableOpacity>
          ),
        }}></Navigation.Screen>
    </Navigation.Navigator>
  );
};

export default Detail;
