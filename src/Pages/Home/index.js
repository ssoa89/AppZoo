import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Pressable, Image, ImageBackground } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navi = useNavigation();

  return (
    <ImageBackground source={require('../../../assets/fundilhos.png')} style={styles.container}>

      <View style={styles.di1}>
        <Pressable style={styles.pressable} >
          <Image source={require('../../../assets/t1.png')} style={styles.image}/>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image source={require('../../../assets/t2.png')} style={styles.image}/>
        </Pressable>
      </View>

      <View style={styles.di2}>
        <Pressable style={styles.pressable}>
          <Image source={require('../../../assets/t3.png')} style={styles.image}/>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image source={require('../../../assets/t4.png')} style={styles.image}/>
        </Pressable>
      </View>

      <View style={styles.di3}>
        <Pressable style={styles.pressable}>
          <Image source={require('../../../assets/t5.png')} style={styles.image}/>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image source={require('../../../assets/t6.png')} style={styles.image}/>
        </Pressable>
      </View>

      <StatusBar style="auto" />

    </ImageBackground>
  );
}