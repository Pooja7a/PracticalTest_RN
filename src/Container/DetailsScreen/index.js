import React from "react";
import { Text, View, Image } from 'react-native';
import { CommonHeader } from "../../Components/Header";
import { strings } from '../../Constant';
import HomeStyles from "../../Theme/HomeStyle";

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsImage: '',
            title: '',
            authhor: '',
            desc: '',
        }
    }

    componentDidMount() {
        try {
            //get details of particular news which pass from home screen
            this.getDetails()
        } catch (error) {
            console.log(error);
        }
    }

    async getDetails() {
        try {
            let response = this.props.route.params.Data
            this.setState({
                newsImage: response.urlToImage,
                title: response.title,
                authhor: response.author,
                desc: response.description,
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CommonHeader
                    LeftImg={true}
                    HeaderName={strings.DetailsHeaderTxt}
                    RightView={false}
                    goBack={() => this.props.navigation.goBack()}
                />
                <View style={{ flex: 1, padding: 10 }}>
                    <Image source={{ url: this.state.newsImage }} style={{ height: 300, width: 300, alignSelf: 'center' }} />
                    <Text style={HomeStyles.ListTxt}>{this.state.title}</Text>
                    <Text style={HomeStyles.AuthorTxt}>{this.state.authhor}</Text>
                    <Text style={HomeStyles.DescTxt}>{this.state.desc}</Text>
                </View>
            </View>
        )
    }
}
export default Details;