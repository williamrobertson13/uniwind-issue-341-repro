import { Pressable, Text, View } from 'react-native';

import { copy562 } from '../generated/copy/copy562';
import { layout562 } from '../generated/layouts/layout562';
import { palette562 } from '../generated/palettes/palette562';

export function Screen562() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout562.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy562.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy562.detail} / {palette562.name}
			</Text>
		</View>
	);
}
