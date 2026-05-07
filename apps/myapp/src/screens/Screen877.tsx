import { Pressable, Text, View } from 'react-native';

import { copy877 } from '../generated/copy/copy877';
import { layout877 } from '../generated/layouts/layout877';
import { palette877 } from '../generated/palettes/palette877';

export function Screen877() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout877.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy877.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy877.detail} / {palette877.name}
			</Text>
		</View>
	);
}
