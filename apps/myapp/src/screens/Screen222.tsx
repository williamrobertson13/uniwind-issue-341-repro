import { Pressable, Text, View } from 'react-native';

import { copy222 } from '../generated/copy/copy222';
import { layout222 } from '../generated/layouts/layout222';
import { palette222 } from '../generated/palettes/palette222';

export function Screen222() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout222.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy222.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy222.detail} / {palette222.name}
			</Text>
		</View>
	);
}
