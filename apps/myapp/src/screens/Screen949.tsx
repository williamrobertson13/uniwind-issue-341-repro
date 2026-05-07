import { Pressable, Text, View } from 'react-native';

import { copy949 } from '../generated/copy/copy949';
import { layout949 } from '../generated/layouts/layout949';
import { palette949 } from '../generated/palettes/palette949';

export function Screen949() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout949.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy949.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy949.detail} / {palette949.name}
			</Text>
		</View>
	);
}
