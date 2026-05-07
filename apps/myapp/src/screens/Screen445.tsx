import { Pressable, Text, View } from 'react-native';

import { copy445 } from '../generated/copy/copy445';
import { layout445 } from '../generated/layouts/layout445';
import { palette445 } from '../generated/palettes/palette445';

export function Screen445() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout445.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy445.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy445.detail} / {palette445.name}
			</Text>
		</View>
	);
}
