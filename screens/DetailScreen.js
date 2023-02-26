import { StyleSheet} from "react-native";
import { WebView } from "react-native-webview";

const DetailScreen = ({route,navigation}) => {
    return (
        <WebView source={{ uri: route.params.externalUrl }} />
    )
};

export default DetailScreen;

const styles = StyleSheet.create({});
