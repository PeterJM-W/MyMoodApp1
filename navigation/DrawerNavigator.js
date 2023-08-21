import React, { Component } from "react";
import Login from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default class DrawerNavigator extends Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name = "Login" component = {Login} />
            </Drawer.Navigator>
        )
    }
}