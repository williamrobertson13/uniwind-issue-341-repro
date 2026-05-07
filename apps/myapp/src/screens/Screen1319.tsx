import { Pressable, Text, View } from 'react-native';

import { copy1319 } from '../generated/copy/copy1319';
import { layout1319 } from '../generated/layouts/layout1319';
import { palette1319 } from '../generated/palettes/palette1319';

export function Screen1319() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1319.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1319.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1319.detail} / {palette1319.name}
			</Text>
		</View>
	);
}
