import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { SafeAreaView, StyleSheet, Pressable, View, Text } from "react-native";
import { Themes } from "../assets/Themes";

export default function HomeScreen({navigation}) {
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    let contentDisplayed = null;
    if (token) {
      contentDisplayed = <SongList tracks={tracks} navigation={navigation}/>
    } else {
      contentDisplayed = <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>
    }
  
    return (
      <SafeAreaView style={styles.container}>
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });