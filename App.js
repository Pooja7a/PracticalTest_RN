import "react-native-gesture-handler"
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './src/Redux/saga'
import reducer from './src/Redux/reducer'
import RootStack from './src/Navigations'
//create instance of sagamiddle ware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
//plug Root Saga
sagaMiddleware.run(rootSaga)

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Provider store={store}> 
          <RootStack/>
         </Provider>
      </NavigationContainer>
    )
  }
}
export default App