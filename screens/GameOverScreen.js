import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../component/BodyText";


const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is Over!</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    resizeMode="cover"
                    style={styles.imageStyle}
                />
            </View>
            <BodyText>Start New Game</BodyText>
            <Button title="Start" onPress={props.startNewGame} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: "hidden",
        marginVertical: 30,

    },
    imageStyle: {
        width: "100%",
        height: "100%",
    }
});

export default GameOverScreen;