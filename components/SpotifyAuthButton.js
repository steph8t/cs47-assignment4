import { Pressable, Text, StyleSheet, Image, View, Dimensions } from "react-native";
import { logout } from "react-native-app-auth";
import { Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;

const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <View style={styles.container}>
                <Image style={{width: 24, height: 24}} source={require('../assets/spotify-logo.png')} />
                <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        padding: 12,
        borderRadius: 9999999,
        width: windowWidth * .6
      },
      authText: {
        color: "white",
        fontWeight: "bold",
      },
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
});

export default SpotifyAuthButton;