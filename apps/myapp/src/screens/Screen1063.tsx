import { Pressable, Text, View } from 'react-native';

import { copy1063 } from '../generated/copy/copy1063';
import { layout1063 } from '../generated/layouts/layout1063';
import { palette1063 } from '../generated/palettes/palette1063';

export function Screen1063() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1063.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1063.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1063.detail} / {palette1063.name}
			</Text>
		</View>
	);
}
