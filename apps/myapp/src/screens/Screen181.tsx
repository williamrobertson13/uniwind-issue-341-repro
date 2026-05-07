import { Pressable, Text, View } from 'react-native';

import { copy181 } from '../generated/copy/copy181';
import { layout181 } from '../generated/layouts/layout181';
import { palette181 } from '../generated/palettes/palette181';

export function Screen181() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout181.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy181.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy181.detail} / {palette181.name}
			</Text>
		</View>
	);
}
