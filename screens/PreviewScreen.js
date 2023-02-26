import { StyleSheet} from "react-native";
import { WebView } from "react-native-webview";

const PreviewScreen = ({route,navigation}) => {
    return (
        <WebView source={{ uri: route.params.previewUrl }} />
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({});
