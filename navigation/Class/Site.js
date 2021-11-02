import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Imagae, ActivityIndicator} from 'react-native';
import {colors} from '../../variables/colors';
import halla from '../../screens/classes/nature/halla';
import {gql, useQuery} from '@apollo/client';
import themesite from '../../screens/classes/site/themesite';
import normalsite from '../../screens/classes/site/normalsite';
import museum from '../../screens/classes/site/museum';
import gallery from '../../screens/classes/site/gallery';
import campingsite from '../../screens/classes/site/campingsite';

const Material = createMaterialTopTabNavigator();

const GET_ENTIRE_CATEGORIES = gql`
  {
    entireCategory(classes: "A030") {
      hcnt_id
      hcnt_hcd
    }
  }
`;

const SiteTab = ({route}) => {
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
        component={themesite}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[2].hcnt_id}
        component={normalsite}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[3].hcnt_id}
        component={museum}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[4].hcnt_id}
        component={gallery}></Material.Screen>
      <Material.Screen
        name={data.entireCategory[5].hcnt_id}
        component={campingsite}></Material.Screen>
    </Material.Navigator>
  );
};

export default SiteTab;
