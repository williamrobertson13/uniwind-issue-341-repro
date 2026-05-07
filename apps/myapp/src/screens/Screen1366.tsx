import { Pressable, Text, View } from 'react-native';

import { copy1366 } from '../generated/copy/copy1366';
import { layout1366 } from '../generated/layouts/layout1366';
import { palette1366 } from '../generated/palettes/palette1366';

export function Screen1366() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1366.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1366.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1366.detail} / {palette1366.name}
			</Text>
		</View>
	);
}
