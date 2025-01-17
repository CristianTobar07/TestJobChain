import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [focus, setfocus] = useState(false);

  const onFocus = () => {
    setfocus(true);
  };

  const onBlur = () => {
    setfocus(!focus);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.input_container,
          {
            borderColor: focus ? '#7D77FF' : 'transparent',
            borderWidth: focus ? 2 : 0,
          },
        ]}>
        {focus && <Text style={styles.text_label}>Correo electrónico</Text>}

        <View style={styles.container_input_icon}>
          <TextInput
            style={styles.input_text}
            placeholder="Escribe tu correo electrónico"
            placeholderTextColor="#7876B1"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <TouchableOpacity onPress={onBlur}>
            <Image source={require('./src/assets/icon_close.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    paddingTop: 15,
  },
  input_container: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#141534',
    paddingHorizontal: 20,
  },
  container_input_icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_label: {
    color: '#7D77FF',
    fontSize: 12,
    paddingLeft: 3,
    marginTop: 5,
  },
  input_text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
