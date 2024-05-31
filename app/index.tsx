import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">index</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  )
}

export default index

