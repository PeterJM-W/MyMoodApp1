import logo from './logo.svg';
import './App.css';
import React from 'react';
import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize"; import * as Font from "expo-font";

let customFonts = {
        'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght copy.ttf')
}

export default class RegisterScreen extends Component{
    render(){
        return(
            <View>
                <Text>
                    Register Screen
                </Text>
            </View>
        )
    }
}