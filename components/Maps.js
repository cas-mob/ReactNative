import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Alert, StyleSheet, Text, View, Share } from 'react-native'

export default class MapsView extends Component {
	constructor() {
		super()
		this.state = { longitude: 0, latitude: 0 }
	}

	componentDidMount() {
		navigator.geolocation.watchPosition(
			pos =>
				this.setState(prev => ({
					...prev,
					longitude: pos.coords.longitude,
					latitude: pos.coords.latitude
				})),
			error => Alert.alert('Error', error.message)
		)
	}

	get position() {
		return `${this.state.longitude} ${this.state.latitude}`
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.position}>Current position is {this.position}</Text>
				<MapView
					style={styles.map}
					zoomEnabled={true}
					showsUserLocation={false}
					provider={PROVIDER_GOOGLE}
					region={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.1,
						longitudeDelta: 0.1
					}}
				>
					<MapView.Marker
						coordinate={{
							latitude: this.state.latitude,
							longitude: this.state.longitude
						}}
						title={'Me'}
						description={'My current position'}
					/>
				</MapView>
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
