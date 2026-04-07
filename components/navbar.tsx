import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Bell } from 'lucide-react-native';

const Navbar = () => {
  return (
    <>
      <View style={styles.navbar}>
        <View className="flex-row items-center">
          <Image
            source={require('../assets/img/Dota-2-logo.webp')}
            style={{ height: 50, width: 50 }}
            contentFit="cover"
          />
          <View>
            <Text style={styles.navbar_text}>Welcome Back</Text>
            <Text style={styles.title}>3AeMe</Text>
          </View>
        </View>
        <View>
          <Bell color={'white'} fill={'white'} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navbar_text: {
    color: 'gray',
    fontSize: 15,
  },
  search: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    color: 'white',
  },
});

export default Navbar;
