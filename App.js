import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DarkTheme, BottomNavigation } from 'react-native-paper';

import Home from './src/pages/Home';
import Dashboard from './src/pages/Dashboard';

export default function App() {
	const theme = {
		...DarkTheme,
		roundness: 2,
		colors: {
			...DarkTheme.colors,
			primary: '#ffc107',
			accent: '#ffc107',
		},
	};

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'home', title: 'Home', icon: 'home' },
		{ key: 'dashboard', title: 'Dashboard', icon: 'chart-bar' },
	]);

	const renderScene = BottomNavigation.SceneMap({
		home: Home,
		dashboard: Dashboard,
	});

	return (
		<PaperProvider theme={theme}>
			<StatusBar backgroundColor="transparent" style="light"/>

			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
			/>
		</PaperProvider>
	);
}
