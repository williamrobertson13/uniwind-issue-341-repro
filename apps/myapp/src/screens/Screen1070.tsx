import { Pressable, Text, View } from 'react-native';

import { copy1070 } from '../generated/copy/copy1070';
import { layout1070 } from '../generated/layouts/layout1070';
import { palette1070 } from '../generated/palettes/palette1070';

export function Screen1070() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1070.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1070.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1070.detail} / {palette1070.name}
			</Text>
		</View>
	);
}
