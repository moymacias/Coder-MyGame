import React, { useState, useEffect } from "react"
import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native"
import Card from "../components/Card"
import win from "../assets/images/win.jpg"
import lose from "../assets/images/gameOver.png"
import colors from "../constants/colors"

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("")

  useEffect(() => {
    handleIamge()
  }, [])

  const handleIamge = () => {
    if (result === "Win") {
      setImage(win)
      return
    }
    setImage(lose)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card>
          <Text>{`You ${result}`}</Text>
        </Card>
        <Image style={styles.imageContainer} source={image} />
      </View>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
})
