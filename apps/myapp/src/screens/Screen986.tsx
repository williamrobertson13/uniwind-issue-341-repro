import { Pressable, Text, View } from 'react-native';

import { copy986 } from '../generated/copy/copy986';
import { layout986 } from '../generated/layouts/layout986';
import { palette986 } from '../generated/palettes/palette986';

export function Screen986() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout986.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy986.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy986.detail} / {palette986.name}
			</Text>
		</View>
	);
}
