import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { Themes } from '../assets/Themes';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const fontSize = 13;

const Song = ({index, imageUrl, title, artist, album, duration, previewUrl,externalUrl,navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.index}>
                <Pressable onPress={(play) => {
                    play.stopPropagation();
                    navigation.navigate('Song Preview', {previewUrl: previewUrl})
                }}>
                    <Ionicons name="play-circle" size={24} color={Themes.colors.spotify}/>
                </Pressable>
            </View>
            <Pressable 
                onPress={() => {navigation.navigate('Song Details',{externalUrl: externalUrl})}}
                style={styles.container}>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <View style={styles.textSection}>
                    <Text style={{color: Themes.colors.white, fontSize: fontSize}} numberOfLines={1}> {title} </Text>
                    <Text style={{color: Themes.colors.gray, fontSize: fontSize}} numberOfLines={1}> {artist} </Text>
                </View>
                <View style={{width: windowWidth*0.2}}>
                    <Text style={{color: Themes.colors.white, fontSize: fontSize}} numberOfLines={1}> {album} </Text>
                </View>
                <View style={styles.duration}>
                    <Text style={{color: Themes.colors.white, fontSize: fontSize}}> {duration} </Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    index: {
        marginLeft: 12,
        marginRight: 12,
    },
    image: {
        width: 64,
        height: 64,
        marginRight: 16,
    },
    textSection: {
        flex: 1,
        width: windowWidth * 0.2,
        alignItems: 'flex-start',
        marginRight: 12,
    },
    duration: {
        marginLeft: 12,
        marginRight: 12,
    },
});

export default Song;