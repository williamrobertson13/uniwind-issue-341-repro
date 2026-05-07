import { Pressable, Text, View } from 'react-native';

import { copy1167 } from '../generated/copy/copy1167';
import { layout1167 } from '../generated/layouts/layout1167';
import { palette1167 } from '../generated/palettes/palette1167';

export function Screen1167() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1167.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1167.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1167.detail} / {palette1167.name}
			</Text>
		</View>
	);
}
