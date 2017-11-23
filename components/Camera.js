import React, { Component } from 'react'
import Camera from 'react-native-camera'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default class CameraView extends Component {
	constructor() {
		super()
		/* todo: state initialisieren */
	}

	render() {
		return (
			<View style={styles.container}>
				<Camera
					ref={cam => {
						this.camera = cam
					}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fit}
				>
					<Button title="Capture" onPress={/* todo: Foto schiessen. Tipp: Context beachten! */}/>
				</Camera>
				<View style={styles.photo}>
					{this.state.photo ? (
						<View style={styles.photo}>
							<Text>Most recent photo:</Text>
							<Image
								style={[
									styles.image,
									{ transform: [{ rotate: `${this.state.rotation}deg` }] }
								]}
								source={{
									uri: null /* todo: Pfad zu Foto eintragen (und null entfernen) */
								}}
							/>
							<Button title="Rotate" onPress={this.rotateImage} />
						</View>
					) : null}
				</View>
			</View>
		)
	}

	takePicture() {
		this.camera
			.capture()
			.then(data => {
				/* todo: Pfad zu Foto "merken" */
			})
			.catch(err => console.error(err))
	}

	rotateImage = () => {
		/* todo: Für die Profis: Foto um 90 Grad rotieren */
		/* siehe "transform" Attribut in <Image/> oberhalb */
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 10
	},
	photo: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	image: {
		flex: 1,
		width: 200,
		resizeMode: 'contain'
	}
})
