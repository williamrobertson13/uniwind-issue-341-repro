import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Uniwind } from 'uniwind';

export default function App() {
	return (
		<Uniwind>
			<View className="flex-1 items-center justify-center bg-white">
				<Text className="text-2xl font-bold text-black">uniwind#341 repro</Text>
				<StatusBar style="auto" />
			</View>
		</Uniwind>
	);
}
