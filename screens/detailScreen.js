import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-web-swiper';
import {colors} from '../variables/colors';

const {height: SCREEN_HEIGT} = Dimensions.get('window');

const detailScreen = ({route}) => {
  const {
    params: {contents},
  } = route;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191919',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Swiper
        style={{flex: 1}}
        timeout={3.5}
        controlsEnabled={false}
        loop
        containerStyle={{width: '100%', height: SCREEN_HEIGT / 4}}>
        {contents.hcnt_sub_img.map(image => {
          return (
            <View key={image} style={{flex: 1}}>
              <Image
                source={{
                  uri: `http://203.253.207.111:8080/jsmith_image${image}`,
                }}
                style={{
                  width: '100%',
                  height: '90%',
                }}></Image>
            </View>
          );
        })}
      </Swiper>
      <View
        style={{
          flex: 1.9,
        }}>
        <View
          style={{
            backgroundColor: colors.orangeRed,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              color: 'white',
              marginLeft: 25,
            }}>
            소개
          </Text>
        </View>
        <Text style={{color: 'white', fontSize: 16}}>
          {contents.hcnt_rcmd_comt}
        </Text>
      </View>
    </View>
  );
};

export default detailScreen;
