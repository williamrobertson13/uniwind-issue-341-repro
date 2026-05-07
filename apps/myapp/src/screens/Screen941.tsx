import { Pressable, Text, View } from 'react-native';

import { copy941 } from '../generated/copy/copy941';
import { layout941 } from '../generated/layouts/layout941';
import { palette941 } from '../generated/palettes/palette941';

export function Screen941() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout941.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy941.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy941.detail} / {palette941.name}
			</Text>
		</View>
	);
}
