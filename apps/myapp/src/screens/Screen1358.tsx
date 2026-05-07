import { Pressable, Text, View } from 'react-native';

import { copy1358 } from '../generated/copy/copy1358';
import { layout1358 } from '../generated/layouts/layout1358';
import { palette1358 } from '../generated/palettes/palette1358';

export function Screen1358() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1358.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1358.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1358.detail} / {palette1358.name}
			</Text>
		</View>
	);
}
