import React from "react";
import { Text, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { CommonHeader } from "../../Components/Header";
import { strings } from '../../Constant';
import { GetNewsListAction } from "../../Redux/actions";
import { connect } from 'react-redux'
import { ApiKeys } from "../../Configs/ApiKeys";
import { Routes } from "../../Configs/Routes";
import HomeStyles from "../../Theme/HomeStyle";

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
            //method call of get news list
            this.getDetails()
        } catch (error) {
            console.log(error);
        }
    }

    async getDetails() {
        try {
            //data get using fetch api
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

    //render method of flatlist which display news list
    getNewsRender = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { this.props.navigation.navigate(Routes.Details, { Data: item }) }}
                style={HomeStyles.TouchView}>
                <Image source={{ uri: item.urlToImage }} style={HomeStyles.ListImg} />
                <Text style={HomeStyles.ListTxt}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    filterPress() {

    }

    SearchPress() {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* common header */}
                <CommonHeader
                    LeftImg={false}
                    HeaderName={strings.HeaderText}
                    RightView={true}
                    pressFilter={() => this.filterPress()}
                    pressSearch={() => this.SearchPress()}
                />
                {/* flatlist with numbers of row two */}
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