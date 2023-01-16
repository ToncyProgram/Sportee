import React from "react";

import {
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';


import Animated, { Easing } from "react-native-reanimated";

const { Value, timing } = Animated

const width = Dimension.get("window").width
const height = Dimension.get("window").height

class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isFocused: false,
            keyword: ''
        }

        this._input_box_translate_x = new Value(width)
        this._back_button_opacity = new Value(0)
        this._content_translate_y = new Value(height)
        this._content_opacity = new Value(0)
    }

_onFocus = () => {

}

    render() {
        return (
            <>
                <SafeAreaView style={styles.headerArea}>
                    <View style={styles.header}>
                        <View style={styles.headerIn}>
                            <TouchableHighlight
                                activeOpacity={1}
                                underlayColor={"#ccd05d"}
                                onPress={this._onFocus}
                                style={styles.icon}
                            >
                                <Icon name="search" size={22} color="#000000" />
                            </TouchableHighlight>
                            <Animated.View
                            style={[styles.input, {tranform: [{translateX: this._input_box_translate_x}]}]}>
                                
                            </Animated.View>
                        </View>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}

export default SearchBar

const styles = StyleSheet.create({

    headerArea: {
        zIndex: 1000
    },
    header: {
        height: 50,
        paddingHorizontal: 16
    },
    headerIn: {
        flex: 1,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",

    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#e4e6eb",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
        width: width - 32
    }


})