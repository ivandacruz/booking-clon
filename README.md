<h1 align='center'>Booking-clone</h1>


Were used for this project:

<h3 align="center">

[Know more -Npm ](https://www.npmjs.com/)

For this application npm was used as package manager or installer

</h3>

<br>

---

<br>

<h1 align="center"> React Navigator

<h3>

[Know more - React Navigation](https://reactnavigation.org/docs/getting-started/)

</h3>

</h1>

install:

```
    $  npm install @react-navigation/native

    '' Installing dependencies into an Expo managed project ''

    $ npx expo install react-native-screens react-native-safe-area-context

    '' Installing the native stack navigator library ''

    $ npm install @react-navigation/native-stack


```

---

<br>

<h1 align="center"> Bottom Tabs Navigator</h1>

<h3>

[Know more - Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)

A simple tab bar on the bottom of the screen that lets you switch between different routes. 
Routes are lazily initialized -- their screen components are not mounted until they are first focused.

</h3>

install:

```

    $ npm install @react-navigation/bottom-tabs

```
---

<br>

<h1 align='center'> Icons.expo.fyi

<h3>

[know more - Icons expo fyi](https://icons.expo.fyi/)

</h3>

</h1>

---
<h1 align="center">
React Native Date Range
</h1>

<h3>

[Know more - React native date range](https://www.npmjs.com/package/@sabroso/react-native-date-range-picker)
    
 a library of expo icons.


</h3>

install:
```

     $ npm install @sabroso/react-native-date-range-picker

```

<br>


<h1 align="center">
React Native Modal
</h1>


[Know more - React Native modals](https://www.npmjs.com/package/react-native-modals)

install:
```

    $ npm install react-native-modals

```

<br>

<h1>
React Native - Alert
</h1>

[React native - Alert](https://reactnative.dev/docs/alert)

Example:

```

import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
     return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;

```

<br>

<!-- <h1></h1> -->

<h1 align="center">React native - Maps</h1>


[React-Native-Maps](https://www.npmjs.com/package/react-native-maps)

```

$ npm i react-native-maps

```




