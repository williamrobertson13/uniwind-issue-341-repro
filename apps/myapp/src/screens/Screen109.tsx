import { Pressable, Text, View } from 'react-native';

import { copy109 } from '../generated/copy/copy109';
import { layout109 } from '../generated/layouts/layout109';
import { palette109 } from '../generated/palettes/palette109';

export function Screen109() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout109.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy109.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy109.detail} / {palette109.name}
			</Text>
		</View>
	);
}
