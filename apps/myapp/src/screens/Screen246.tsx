import { Pressable, Text, View } from 'react-native';

import { copy246 } from '../generated/copy/copy246';
import { layout246 } from '../generated/layouts/layout246';
import { palette246 } from '../generated/palettes/palette246';

export function Screen246() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout246.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy246.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy246.detail} / {palette246.name}
			</Text>
		</View>
	);
}
