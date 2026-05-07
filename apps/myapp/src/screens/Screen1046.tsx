import { Pressable, Text, View } from 'react-native';

import { copy1046 } from '../generated/copy/copy1046';
import { layout1046 } from '../generated/layouts/layout1046';
import { palette1046 } from '../generated/palettes/palette1046';

export function Screen1046() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1046.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1046.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1046.detail} / {palette1046.name}
			</Text>
		</View>
	);
}
