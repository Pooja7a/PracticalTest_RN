import React from "react";
import {StyleSheet} from 'react-native';
import {fonts,colors,} from '../Constant'

const HomeStyles =StyleSheet.create({
    TouchView:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    ListImg:{ 
        height: 200, 
        width: 200, 
    },
    ListTxt:{ 
        fontSize: fonts.FONT_14, 
        color: colors.Black, 
        textAlign: 'center', 
        paddingTop: 5, 
        fontWeight: 'bold' 
    },
    AuthorTxt:{ 
        fontSize: fonts.FONT_12, 
        color: colors.Black, 
        textAlign: 'left', 
        marginTop: 15, 
    },
    DescTxt:{ 
        fontSize: fonts.FONT_12, 
        color: colors.Black, 
        textAlign: 'left', 
        marginTop: 15, 
    }
})
export default HomeStyles;