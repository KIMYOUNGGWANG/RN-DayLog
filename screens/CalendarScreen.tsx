import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

// const FadeInAndOut = () => {
//   const animation = useRef(new Animated.Value(1)).current;
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: hidden ? 0 : 1,
//       useNativeDriver: true,
//     }).start();
//   }, [hidden, animation]);
//   return (
//     <View>
//       <Animated.View style={[styles.rectangle, {opacity: animation}]} />
//       <Button title="FadeInOut" onPress={() => setHidden(prev => !prev)} />
//     </View>
//   );
// };
const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[styles.rectangle, {transform: [{translateX: animation}]}]}
      />
      <Button title="Slide" onPress={() => setEnabled(prev => !prev)} />
    </View>
  );
};
const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
};

export default CalendarScreen;
const styles = StyleSheet.create({
  block: {},
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});
