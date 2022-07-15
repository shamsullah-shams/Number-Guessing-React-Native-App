import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";


const Header = (props) => {
    return (
        <View style={styles.header}>
            <BodyText style={styles.headerTitle}>
                {props.title}
            </BodyText>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});


export default Header;