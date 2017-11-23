import React, { Component } from 'react'
import {
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	Share
} from 'react-native'

export default class ApiView extends Component {
	constructor() {
		super()
		this.state = { users: [] }
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(users => {
				/* todo: users in state updaten */
			})
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<FlatList
					data={this.state.users}
					keyExtractor={user => user.id}
					renderItem={this.renderItem}
				/>
			</ScrollView>
		)
	}

	formatUser = user => {
		/* todo: user-Informationen formatieren und zurück geben */
	}

	share = user => {
		/* todo: share-api aufrufen, um Benutzerdetails zu teilen */
	}

	askToShare = user => {
		Alert.alert(
			'Share User',
			this.formatUser(user),
			[
				{ text: 'Share', onPress: () => this.share(user) },
				{ text: 'Cancel', style: 'cancel' }
			],
			{ cancelable: false }
		)
	}

	renderItem = ({ item }) => (
		<View style={styles.row}>
			{/* todo: Text, z.B. Name des Users rendern */
			/* todo: Button rendern und bei 'onPress' askToShare-Funktion aufrufen */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 10
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5
	}
})
