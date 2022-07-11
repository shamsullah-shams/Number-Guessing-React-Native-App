import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "../component/Card";
import NumberContainer from "../component/NumberContainer";

// @@ ==== To Generate Random Three Numbers
const generateRandomBetween = (min, max, exclode) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclode) {
        return generateRandomBetween(min, max, exclode);
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;
    // @@ ==== To Detect The Game Over Screen
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    // @@ ==== Let The Computer To Guess The Number You Choose
    const nextGuessHandler = direction => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice)) {
            Alert.alert(
                'Don\'t lie!',
                'You know this is wrong...',
                [{ text: "sorry", style: "cancel" }]
            );
            return;
        }
        // @@ ==== if lower button is pressed
        if (direction === 'lower') {
            // @@ ==== then the current Guess will be the upper boundry
            currentHigh.current = currentGuess;
        } else {
            // @@ ==== otherwise the current Guess will be the lower boundry
            currentLow.current = currentGuess;
        }
        // @@ ==== generate next guess
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.button}>
                <Button
                    title="LOWER"
                    onPress={nextGuessHandler.bind(this, "lower")}
                />
                <Button
                    title="GREATER"
                    onPress={nextGuessHandler.bind(this, "greater")}
                />
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    }
});

export default GameScreen;