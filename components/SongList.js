import { FlatList, Text, StyleSheet, View, Image, Dimensions, Pressable } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import Song from "./Song";

const windowWidth = Dimensions.get("window").width;

const SongList = ({tracks,navigation}) => {
    const renderSong = ({item,index}) => (
        <Song
            index={index+1}
            imageUrl={item.imageUrl}
            title={item.songTitle}
            artist={item.songArtists[0].name}
            album={item.albumName}
            duration={millisToMinutesAndSeconds(item.duration)}
            previewUrl={item.previewUrl}
            externalUrl={item.externalUrl}
            navigation={navigation}
        />
    );

    return (
        <View style={{flex: 1, width: windowWidth}}>
            <View style={styles.container}>
                <View style={styles.titleRow}>
                    <Image style={{width: 24, height: 24, marginRight: 8}} source={require('../assets/spotify-logo.png')} />
                    <Text style={styles.titleText}>My Top Tracks</Text>
                </View>
            </View>
            <FlatList 
                data={tracks}
                navigation={navigation}
                renderItem={(item,index) => renderSong(item,index,navigation)}
                keyExtractor={(item) => item.externalUrl}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginBottom: 16,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Themes.colors.white,
    },
});

export default SongList;