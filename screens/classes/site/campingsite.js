import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const CONTENTS_IMAGE = gql`
  {
    leftImg(code: "A0305") {
      hcnt_hcd
      hcnt_name
      hcnt_rcmd_comt
      hcnt_sub_img
    }
    rightImg(code: "A0305") {
      hcnt_hcd
      hcnt_name
      hcnt_rcmd_comt
      hcnt_sub_img
    }
  }
`;

const campingsite = ({navigation: {navigate}}) => {
  const {loading, data, error} = useQuery(CONTENTS_IMAGE);
  return loading || error !== undefined ? (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919',
      }}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <View style={{marginLeft: 25}}>
          {data.leftImg.map(image => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate('Detail', {
                    contents: image,
                  })
                }
                key={image.hcnt_hcd}
                style={{}}>
                <Image
                  source={{
                    uri: `http://203.253.207.111:8080/jsmith_image${image.hcnt_sub_img[0]}`,
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    marginBottom: 20,
                  }}></Image>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{marginLeft: 20}}>
          {data.rightImg.map(image => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate('Detail', {
                    contents: image,
                  })
                }
                key={image.hcnt_hcd}
                style={{}}>
                <Image
                  source={{
                    uri: `http://203.253.207.111:8080/jsmith_image${image.hcnt_sub_img[0]}`,
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    marginBottom: 20,
                  }}></Image>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default campingsite;
