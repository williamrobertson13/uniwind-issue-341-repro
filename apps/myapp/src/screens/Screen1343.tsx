import { Pressable, Text, View } from 'react-native';

import { copy1343 } from '../generated/copy/copy1343';
import { layout1343 } from '../generated/layouts/layout1343';
import { palette1343 } from '../generated/palettes/palette1343';

export function Screen1343() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1343.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1343.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1343.detail} / {palette1343.name}
			</Text>
		</View>
	);
}
