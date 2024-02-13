import React from 'react';
import {Box, Image, Text, VStack} from '@gluestack-ui/themed';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';

const SkeletonPlaceholderForEventView = () => {
  return (
    <View>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginHorizontal: 10}} />
              <View style={{width: 120, height: 20}} />
            </View>
            <View style={{width: 60, height: 20}} />
          </View>

          <View style={{width: '100%', height: 20, marginTop: 10}} />

          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <View style={{width: 40, height: 20, marginRight: 5}} />
            <View style={{width: 120, height: 20, marginLeft: 5}} />
          </View>
        </View>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View style={{width: 40, height: 20, marginRight: 5}} />
              <View style={{width: 120, height: 20, marginLeft: 5}} />
            </View>
            <View style={{width: 120, height: 20, marginLeft: 5}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View style={{width: 40, height: 20, marginRight: 5}} />
              <View style={{width: 120, height: 20, marginLeft: 5}} />
            </View>
            <View style={{width: 120, height: 20, marginLeft: 5}} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};
export default SkeletonPlaceholderForEventView;
