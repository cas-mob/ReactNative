import React, { Component } from 'react'
import Camera from 'react-native-camera'
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image
} from 'react-native'

export default class CameraView extends Component {
	constructor() {
		super()
		this.state = {
			rotation: 0,
			photo:
				'https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg'
		}
	}

	takePicture() {
		this.camera
			.capture()
			.then(data =>
				this.setState(prev => {
					console.log(data)
					return { ...prev, photo: data.path }
				})
			)
			.catch(err => console.error(err))
	}

	rotateImage = () =>
		this.setState(prev => ({ ...prev, rotation: (prev.rotation + 90) % 360 }))

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
					<Button title="Capture" onPress={this.takePicture.bind(this)} />
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
								source={{ uri: this.state.photo }}
							/>
							<Button title="Rotate" onPress={this.rotateImage} />
						</View>
					) : null}
				</View>
			</View>
		)
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
