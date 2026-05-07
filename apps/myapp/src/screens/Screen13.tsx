import { Pressable, Text, View } from 'react-native';

import { copy13 } from '../generated/copy/copy13';
import { layout13 } from '../generated/layouts/layout13';
import { palette13 } from '../generated/palettes/palette13';

export function Screen13() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout13.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy13.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy13.detail} / {palette13.name}
			</Text>
		</View>
	);
}
