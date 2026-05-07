import { Pressable, Text, View } from 'react-native';

import { copy1038 } from '../generated/copy/copy1038';
import { layout1038 } from '../generated/layouts/layout1038';
import { palette1038 } from '../generated/palettes/palette1038';

export function Screen1038() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1038.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1038.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1038.detail} / {palette1038.name}
			</Text>
		</View>
	);
}
