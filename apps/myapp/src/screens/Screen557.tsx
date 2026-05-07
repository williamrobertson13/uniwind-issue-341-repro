import { Pressable, Text, View } from 'react-native';

import { copy557 } from '../generated/copy/copy557';
import { layout557 } from '../generated/layouts/layout557';
import { palette557 } from '../generated/palettes/palette557';

export function Screen557() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout557.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy557.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy557.detail} / {palette557.name}
			</Text>
		</View>
	);
}
