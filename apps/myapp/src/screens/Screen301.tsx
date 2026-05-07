import { Pressable, Text, View } from 'react-native';

import { copy301 } from '../generated/copy/copy301';
import { layout301 } from '../generated/layouts/layout301';
import { palette301 } from '../generated/palettes/palette301';

export function Screen301() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout301.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy301.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy301.detail} / {palette301.name}
			</Text>
		</View>
	);
}
