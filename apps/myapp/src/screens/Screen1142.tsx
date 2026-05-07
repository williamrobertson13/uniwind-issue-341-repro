import { Pressable, Text, View } from 'react-native';

import { copy1142 } from '../generated/copy/copy1142';
import { layout1142 } from '../generated/layouts/layout1142';
import { palette1142 } from '../generated/palettes/palette1142';

export function Screen1142() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1142.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1142.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1142.detail} / {palette1142.name}
			</Text>
		</View>
	);
}
