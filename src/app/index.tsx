import { Link } from "expo-router"
import React from "react"
import { View, Text } from "react-native"

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray">
      <Link href={"/home"} className="text-3xl text-underline font-mono font-bold text-blue"> Go to Home Screen</Link>
    </View>
  )
}

export default Home