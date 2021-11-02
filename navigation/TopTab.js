import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {gql, useQuery} from '@apollo/client';
import NatureTab from './Class/NatureTab';
import SeaTab from './Class/SeaTab';
import {colors} from '../variables/colors';
import SiteTab from './Class/Site';
import ActivityTab from './Class/ActivityTab';
import OlleTab from './Class/OlleTab';

const Material = createMaterialTopTabNavigator();

const GET_CATEGORIES = gql`
  {
    categories {
      hcnt_id
      hcnt_hcd
    }
  }
`;

const TopTab = () => {
  const {loading, error, data} = useQuery(GET_CATEGORIES);
  return loading || error !== undefined ? (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator />
    </View>
  ) : (
    <Material.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.orangeRed,
        },
      }}>
      <Material.Screen
        name={data.categories[0].hcnt_id}
        component={NatureTab}></Material.Screen>
      <Material.Screen
        name={data.categories[1].hcnt_id}
        component={SeaTab}></Material.Screen>
      <Material.Screen
        name={`제주 ${data.categories[2].hcnt_id}`}
        component={SiteTab}></Material.Screen>
      <Material.Screen
        name={data.categories[3].hcnt_id}
        component={ActivityTab}></Material.Screen>
      <Material.Screen
        name={data.categories[4].hcnt_id}
        component={OlleTab}></Material.Screen>
    </Material.Navigator>
  );
};
export default TopTab;
