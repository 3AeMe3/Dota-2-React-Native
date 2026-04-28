import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Bell } from 'lucide-react-native';
import Typography from './common/typography';
import { Link } from 'expo-router';

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
            <Typography color="gray">Wellcome Back</Typography>
            <Typography variant="title" className="text-2xl">
              3AeMe
            </Typography>
          </View>
        </View>
        <View>
          <Link href={{ pathname: './notification' }}>
            <Bell color={'white'} fill={'white'} />
          </Link>
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
    fontFamily: 'Sora_SemiBold',
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
