import { Pressable, Text, View } from 'react-native';

import { copy901 } from '../generated/copy/copy901';
import { layout901 } from '../generated/layouts/layout901';
import { palette901 } from '../generated/palettes/palette901';

export function Screen901() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout901.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy901.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy901.detail} / {palette901.name}
			</Text>
		</View>
	);
}
