import { Pressable, Text, View } from 'react-native';

import { copy1095 } from '../generated/copy/copy1095';
import { layout1095 } from '../generated/layouts/layout1095';
import { palette1095 } from '../generated/palettes/palette1095';

export function Screen1095() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1095.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1095.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1095.detail} / {palette1095.name}
			</Text>
		</View>
	);
}
