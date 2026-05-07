import { Pressable, Text, View } from 'react-native';

import { copy1254 } from '../generated/copy/copy1254';
import { layout1254 } from '../generated/layouts/layout1254';
import { palette1254 } from '../generated/palettes/palette1254';

export function Screen1254() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1254.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1254.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1254.detail} / {palette1254.name}
			</Text>
		</View>
	);
}
