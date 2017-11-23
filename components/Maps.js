import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Alert, StyleSheet, Text, View, Share } from 'react-native'

export default class MapsView extends Component {
	constructor() {
		super()
		this.state = { longitude: 0, latitude: 0 }
	}

	componentDidMount() {
		navigator.geolocation.watchPosition(/* todo: longitude & latitude speichern; Bei Fehler Alert-Message anzeigen */)
	}

	get position() {
		return `${null /* todo: Positionsdaten zurück geben */}`
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.position}>Current position is {this.position}</Text>
				{/* todo: Map und Marker rendern */}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		padding: 10
	},
	map: {
		flex: 1,
		width: '100%'
	},
	position: {
		fontSize: 16
	}
})
