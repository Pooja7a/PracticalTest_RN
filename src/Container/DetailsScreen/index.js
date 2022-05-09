import React from "react";
import { Text, FlatList, View } from 'react-native';
import { CommonHeader } from "../../Components/Header";
import { fonts, images, colors, strings } from '../../Constant';

class Details extends React.Component {
    render() {
        return (
            <CommonHeader
                LeftImg={true}
                HeaderName={strings.DetailsHeaderTxt}
                RightView={false}
            />
        )
    }
}
export default Details;