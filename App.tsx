import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Uniwind } from 'uniwind';

import { ScreenA } from './src/screens/ScreenA';
import { ScreenB } from './src/screens/ScreenB';
import { ScreenC } from './src/screens/ScreenC';
import { ScreenD } from './src/screens/ScreenD';
import { ScreenE } from './src/screens/ScreenE';

export default function App() {
	return (
		<Uniwind>
			<View className="flex-1 items-center justify-center bg-white p-4">
				<Text className="text-2xl font-bold text-black">uniwind#341 repro</Text>
				<ScreenA />
				<ScreenB />
				<ScreenC />
				<ScreenD />
				<ScreenE />
				<StatusBar style="auto" />
			</View>
		</Uniwind>
	);
}
