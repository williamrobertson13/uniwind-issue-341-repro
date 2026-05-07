import { Pressable, Text, View } from 'react-native';

import { copy343 } from '../generated/copy/copy343';
import { layout343 } from '../generated/layouts/layout343';
import { palette343 } from '../generated/palettes/palette343';

export function Screen343() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout343.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy343.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy343.detail} / {palette343.name}
			</Text>
		</View>
	);
}
