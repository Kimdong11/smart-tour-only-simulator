import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '../../variables/colors';
import halla from '../../screens/classes/nature/halla';
import {gql, useQuery} from '@apollo/client';
import mountain from '../../screens/classes/nature/mountain';
import forest from '../../screens/classes/nature/forest';
import island from '../../screens/classes/nature/island';
import unesco from '../../screens/classes/nature/unesco';

const Material = createMaterialTopTabNavigator();

const GET_ENTIRE_CATEGORIES = gql`
  {
    entireCategory(classes: "A010") {
      hcnt_id
      hcnt_hcd
    }
  }
`;

const NatureTab = () => {
  const {loading, data, error} = useQuery(GET_ENTIRE_CATEGORIES);
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
        name={data.entireCategory[1].hcnt_id}
        component={halla}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[2].hcnt_id}
        component={mountain}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[3].hcnt_id}
        component={forest}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[4].hcnt_id}
        component={island}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[5].hcnt_id}
        component={unesco}></Material.Screen>
    </Material.Navigator>
  );
};

export default NatureTab;
