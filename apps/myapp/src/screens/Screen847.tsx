import { Pressable, Text, View } from 'react-native';

import { copy847 } from '../generated/copy/copy847';
import { layout847 } from '../generated/layouts/layout847';
import { palette847 } from '../generated/palettes/palette847';

export function Screen847() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout847.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy847.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy847.detail} / {palette847.name}
			</Text>
		</View>
	);
}
