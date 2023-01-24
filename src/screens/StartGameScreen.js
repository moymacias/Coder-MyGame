import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native"
import Card from "../components/Card"
import colors from "../constants/colors"
import Input from "../components/Input"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const os = Platform.OS

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState("")

  useEffect(() => {
    console.log(width, height, os)
  }, [])

  const handleConfirmation = () => {
    const newValue = parseInt(value)
    if (newValue === NaN || newValue <= 0 || newValue > 99) return

    setConfirmed(true)
    setSelectedNumber(newValue)
    setValue("")
    Keyboard.dismiss()
  }

  const handleInput = text => {
    setValue(text.replace(/[^0-9]/g, ""))
  }

  const handleResetInput = () => {
    setValue("")
    setConfirmed(false)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={os === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ backgroundColor: colors.primary }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <Card>
              <Text style={styles.subtitle}>Chose a number</Text>
              <Input
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                maxLength={2}
                value={value}
                onChangeText={handleInput}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.cleanButton}>
                  <Button
                    title="Clean"
                    onPress={handleResetInput}
                    color={"#7D7D8B"}
                  />
                </View>
                <View style={styles.confirmStyle}>
                  <Button
                    title="Confirm"
                    onPress={handleConfirmation}
                    color={"#fff"}
                  />
                </View>
              </View>
            </Card>
            {confirmed && (
              <Card newStyles={styles.selectedCard}>
                <Text style={{ color: "white" }}>Your number is:</Text>
                <Text style={styles.selectedNumber}>{selectedNumber}</Text>
                <View style={styles.confirmStyle}>
                  <Button
                    title="Start"
                    color={"#fff"}
                    onPress={() => onStartGame(selectedNumber)}
                  />
                </View>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: "white",
  },
  subtitle: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  cleanButton: {
    width: 100,
    backgroundColor: colors.disableColor,
    borderRadius: 10,
  },
  confirmStyle: {
    width: 100,
    backgroundColor: colors.actionColor,
    borderRadius: 10,
  },
  selectedCard: {
    marginTop: 50,
    width: "50%",
  },
  selectedNumber: {
    color: "white",
    marginVertical: 20,
    fontSize: 35,
  },
})
