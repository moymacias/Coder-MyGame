import React, { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card"

import colors from "../constants/colors"

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumption is:</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Lower" onPress={() => console.log("menor")} />
        <Button title="Higher" onPress={() => console.log("mayor")} />
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  textColor: {
    color: "#fff",
  },
})
