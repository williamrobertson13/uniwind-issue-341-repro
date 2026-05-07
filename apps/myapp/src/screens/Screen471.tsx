import { Pressable, Text, View } from 'react-native';

import { copy471 } from '../generated/copy/copy471';
import { layout471 } from '../generated/layouts/layout471';
import { palette471 } from '../generated/palettes/palette471';

export function Screen471() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout471.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy471.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy471.detail} / {palette471.name}
			</Text>
		</View>
	);
}
