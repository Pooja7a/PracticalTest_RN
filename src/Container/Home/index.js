import React from "react";
import { Text, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { CommonHeader } from "../../Components/Header";
import { fonts, images, colors, strings } from '../../Constant';
import { GetNewsListAction } from "../../Redux/actions";
import { connect } from 'react-redux'
import { ApiKeys } from "../../Configs/ApiKeys";
import { Routes } from "../../Configs/Routes";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            DataArray: [],
            ApiFlag: true
        }
    }

    componentDidMount() {
        try {
            this.getDetails()
        } catch (error) {
            console.log(error);
        }
    }

    async getDetails() {
        try {
            let response = await fetch(ApiKeys.url + ApiKeys.topHeadline + ApiKeys.key)
            let json = await response.json()
            console.log(json);
            if (json.articles.length > 0) {
                this.setState({ DataArray: json.articles })
            }
        } catch (error) {
            console.log(error);
        }
    }

    getNewsRender = ({ item, index }) => {
        console.log(item, "====== item");
        return (
            <TouchableOpacity
                onPress={() => { this.props.navigation.navigate(Routes.Details, { Data: item }) }}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Image source={{ uri: item.urlToImage }} style={{ height: 200, width: 200, }} />
                <Text style={{ fontSize: fonts.FONT_14, color: colors.Black, textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CommonHeader
                    LeftImg={false}
                    HeaderName={strings.HeaderText}
                    RightView={true}
                    goBack={()=>this.props.navigation.goBack()}
                />
                <FlatList
                    data={this.state.DataArray}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={this.getNewsRender}
                    numColumns={2}
                />
            </View>
        )
    }
}
export default Home;