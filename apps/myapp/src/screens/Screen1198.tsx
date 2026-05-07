import { Pressable, Text, View } from 'react-native';

import { copy1198 } from '../generated/copy/copy1198';
import { layout1198 } from '../generated/layouts/layout1198';
import { palette1198 } from '../generated/palettes/palette1198';

export function Screen1198() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1198.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1198.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1198.detail} / {palette1198.name}
			</Text>
		</View>
	);
}
