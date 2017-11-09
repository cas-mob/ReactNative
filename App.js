import React from 'react'
import ApiView from './components/Api'
import { TabNavigator } from 'react-navigation'
import CameraView from './components/Camera'
import MapsView from './components/Maps'

const RootTabs = TabNavigator({
	Maps: {
		screen: MapsView
	},
	Camera: {
		screen: CameraView
	},
	'Api & Share': {
		screen: ApiView
	}
})

export default RootTabs
