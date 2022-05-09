import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { colors, fonts, images } from "../../Constant";

export const CommonHeader = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 90,
            backgroundColor: colors.GREEN_Gradient_1,
            paddingTop: 40,
            paddingHorizontal: 18,
        }}>
            {
                props.LeftImg
                    ?
                    <TouchableOpacity onPress={props.goBack}>
                    <Image source={images.LEFT_ARROW} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    : null
            }
            <Text style={{ flex: 1, fontSize: fonts.FONT_22, color: colors.White, textAlign: 'left', paddingTop: 5, fontWeight: 'bold' }}>{props.HeaderName}</Text>
            {
                props.RightView
                    ?
                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 5,
                    }}>
                        <TouchableOpacity>
                            <Image source={images.SEARCH} style={{ marginRight: 15, height: 25, width: 25, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={images.FILTER} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </View>
    )
}