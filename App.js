import React from 'react'
import ApiView from './components/Api'
import { TabNavigator } from 'react-navigation'
import CameraView from './components/Camera'

const RootTabs = TabNavigator({
	Camera: {
		screen: CameraView
	},
	'Api & Share': {
		screen: ApiView
	}
})

export default RootTabs
