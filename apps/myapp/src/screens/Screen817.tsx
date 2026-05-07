import { Pressable, Text, View } from 'react-native';

import { copy817 } from '../generated/copy/copy817';
import { layout817 } from '../generated/layouts/layout817';
import { palette817 } from '../generated/palettes/palette817';

export function Screen817() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout817.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy817.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy817.detail} / {palette817.name}
			</Text>
		</View>
	);
}
