import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabItem } from '..';
import { colors } from '../../../utils';

const BottomNavigation =({ state, descriptors, navigation }) => {
  return (
    <View style={styles.bottomnav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
          key={index}
          label={label}
          isFocused={isFocused}
          onPress={onPress}
          onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}


export default BottomNavigation

const styles = StyleSheet.create({
  bottomnav:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    flexDirection:'row',
    backgroundColor:colors.primary,
    paddingVertical: 8,
    paddingHorizontal:30,
    marginBottom:30,
    marginHorizontal:30,
    borderRadius:5,
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.84,
    elevation:5,
    justifyContent:'space-between'
  }
})