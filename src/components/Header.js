import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Header = ({ title, newStyles }) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...newStyles }}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#151522",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
  },
})
