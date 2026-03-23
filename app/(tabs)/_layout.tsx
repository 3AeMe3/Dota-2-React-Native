import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon src={require('../../assets/svg/home.svg')} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="favorites">
          <Label>Favorites</Label>
          <Icon src={require('../../assets/svg/heart.svg')} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="search">
          <Label>Search</Label>
          <Icon src={require('../../assets/svg/search.svg')} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="account">
          <Label>Account</Label>
          <Icon src={require('../../assets/svg/user.svg')} />
        </NativeTabs.Trigger>
      </NativeTabs>
  );
}
