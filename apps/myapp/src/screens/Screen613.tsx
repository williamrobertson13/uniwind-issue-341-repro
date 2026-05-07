import { Pressable, Text, View } from 'react-native';

import { copy613 } from '../generated/copy/copy613';
import { layout613 } from '../generated/layouts/layout613';
import { palette613 } from '../generated/palettes/palette613';

export function Screen613() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout613.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy613.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy613.detail} / {palette613.name}
			</Text>
		</View>
	);
}
