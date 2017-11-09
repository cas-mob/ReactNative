import React from 'react'
import ApiView from './components/Api'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'

const RootTabs = TabNavigator({
	Home: {
		screen: () => <View style={{flex: 1, justifyContent: 'center'}}>
			<Text style={{textAlign: 'center'}}>
				Welcome to myApp!
			</Text>
		</View>
	},
	'Api & Share': {
		screen: ApiView
	}
})

export default RootTabs
