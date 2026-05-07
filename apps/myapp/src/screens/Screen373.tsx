import { Pressable, Text, View } from 'react-native';

import { copy373 } from '../generated/copy/copy373';
import { layout373 } from '../generated/layouts/layout373';
import { palette373 } from '../generated/palettes/palette373';

export function Screen373() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout373.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy373.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy373.detail} / {palette373.name}
			</Text>
		</View>
	);
}
