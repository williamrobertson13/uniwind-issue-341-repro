import { Pressable, Text, View } from 'react-native';

import { copy175 } from '../generated/copy/copy175';
import { layout175 } from '../generated/layouts/layout175';
import { palette175 } from '../generated/palettes/palette175';

export function Screen175() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout175.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy175.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy175.detail} / {palette175.name}
			</Text>
		</View>
	);
}
