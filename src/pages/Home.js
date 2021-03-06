import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Portal, Modal, RadioButton, IconButton, Button, FAB, TextInput } from 'react-native-paper';

export default function Home() {
	const [lata, setLata] = React.useState(0);
	const [longneck, setLongneck] = React.useState(0);
	const [garrafa, setGarrafa] = React.useState(0);
	const [visible, setVisible] = React.useState(false);
	const [selectedBeer, setSelectedBeer] = React.useState('lata');
	const [quantity, setQuantity] = React.useState(0);

	const showForm = () => {
		setVisible(true);
	}

	const hideForm = () => {
		setQuantity(0);
		setVisible(false);
	}

	const incrementQuantity = () => {
		setQuantity(quantity + 1);
	}

	const decrementQuantity = () => {
		if (quantity == 0) setQuantity(0);
		else setQuantity(quantity - 1);
	}

	const setBeerQuantity = () => {
		if (selectedBeer == 'lata') setLata(lata + quantity);
		if (selectedBeer == 'longneck') setLongneck(longneck + quantity);
		if (selectedBeer == 'garrafa') setGarrafa(garrafa + quantity);

		hideForm();
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ alignItems: 'flex-start' }}>
				<Text style={{ fontSize: 24 }}>{lata} latas</Text>
				<Text style={{ fontSize: 24 }}>{longneck} longnecks</Text>
				<Text style={{ fontSize: 24 }}>{garrafa} garrafas</Text>
			</View>

			<Portal>
				<Modal visible={visible} onDismiss={hideForm} contentContainerStyle={styles.formPopup}>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<RadioButton value="lata" status={selectedBeer === 'lata' ? 'checked' : 'unchecked'} onPress={() => setSelectedBeer('lata')} />
						<Text style={{ fontSize: 16 }}>Lata</Text>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<RadioButton value="longneck" status={selectedBeer === 'longneck' ? 'checked' : 'unchecked'} onPress={() => setSelectedBeer('longneck')} />
						<Text style={{ fontSize: 16 }}>Longneck</Text>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<RadioButton value="garrafa" status={selectedBeer === 'garrafa' ? 'checked' : 'unchecked'} onPress={() => setSelectedBeer('garrafa')} />
						<Text style={{ fontSize: 16 }}>Garrafa</Text>
					</View>

					<View style={styles.quantityContainer}>
						<IconButton
							icon="minus"
							color="#ffc107"
							size={32}
							onPress={decrementQuantity}
						/>
						<Text style={{ fontSize: 32 }}>{quantity}</Text>
						<IconButton
							icon="plus"
							color="#ffc107"
							size={32}
							onPress={incrementQuantity}
						/>
					</View>

					<TextInput
						placeholder={`Preço da ${selectedBeer}`}
						mode="outlined"
						keyboardType="numeric"
						style={{ backgroundColor: "transparent" }}
						dense
					/>

					<Button mode="contained" style={{ marginTop: 16 }} icon="check" onPress={setBeerQuantity}>Adicionar</Button>
				</Modal>
			</Portal>

			<FAB style={styles.fabButton} icon="plus" onPress={showForm} />
		</View>
	);
}

const styles = StyleSheet.create({
	formPopup: {
		margin: 32,
		padding: 16,
		backgroundColor: '#444',
		borderRadius: 2,
	},
	quantityContainer: {
		marginVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	fabButton: {
		position: 'absolute',
		right: 32,
		bottom: 32,
	},
});
