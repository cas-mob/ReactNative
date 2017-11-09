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
		this.state = {users: []}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(users => this.setState(prev => ({...prev, users: users})))
	}

	formatUser = user => `${user.name} (${user.email})`

	share = user => {
		Share.share({title: 'Share User', message: this.formatUser(user)})
	}

	askToShare = user => {
		Alert.alert(
			'Share User',
			this.formatUser(user),
			[
				{text: 'Share', onPress: () => this.share(user)},
				{text: 'Cancel', style: 'cancel'}
			],
			{cancelable: false}
		)
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<FlatList
					data={this.state.users}
					keyExtractor={user => user.id}
					renderItem={({item}) => (
						<View style={styles.row}>
							<Text>{item.name}</Text>
							<Button
								style={styles.orderButton}
								onPress={() => this.askToShare(item)}
								title="Share"
							/>
						</View>
					)}
				/>
			</ScrollView>
		)
	}
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
