import { Pressable, Text, View } from 'react-native';

import { copy1183 } from '../generated/copy/copy1183';
import { layout1183 } from '../generated/layouts/layout1183';
import { palette1183 } from '../generated/palettes/palette1183';

export function Screen1183() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1183.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1183.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1183.detail} / {palette1183.name}
			</Text>
		</View>
	);
}
