import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Imagae, ActivityIndicator} from 'react-native';
import {colors} from '../../variables/colors';
import halla from '../../screens/classes/nature/halla';
import {gql, useQuery} from '@apollo/client';
import beach from '../../screens/classes/sea/beach';
import seashore from '../../screens/classes/sea/seashore';
import waterfall from '../../screens/classes/sea/waterfall';
import valley from '../../screens/classes/sea/valley';
import harbor from '../../screens/classes/sea/harbor';

const Material = createMaterialTopTabNavigator();

const GET_ENTIRE_CATEGORIES = gql`
  {
    entireCategory(classes: "A020") {
      hcnt_id
      hcnt_hcd
    }
  }
`;

const SeaTab = ({route}) => {
  const {loading, data, error} = useQuery(GET_ENTIRE_CATEGORIES);
  return loading ? (
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
        name={data.entireCategory[1].hcnt_id}
        component={beach}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[2].hcnt_id}
        component={seashore}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[3].hcnt_id}
        component={waterfall}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[4].hcnt_id}
        component={valley}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[5].hcnt_id}
        component={harbor}></Material.Screen>
    </Material.Navigator>
  );
};

export default SeaTab;
