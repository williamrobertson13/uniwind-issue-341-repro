import { Pressable, Text, View } from 'react-native';

import { copy174 } from '../generated/copy/copy174';
import { layout174 } from '../generated/layouts/layout174';
import { palette174 } from '../generated/palettes/palette174';

export function Screen174() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout174.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy174.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy174.detail} / {palette174.name}
			</Text>
		</View>
	);
}
