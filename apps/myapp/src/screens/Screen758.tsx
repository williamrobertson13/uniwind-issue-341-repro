import { Pressable, Text, View } from 'react-native';

import { copy758 } from '../generated/copy/copy758';
import { layout758 } from '../generated/layouts/layout758';
import { palette758 } from '../generated/palettes/palette758';

export function Screen758() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout758.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy758.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy758.detail} / {palette758.name}
			</Text>
		</View>
	);
}
