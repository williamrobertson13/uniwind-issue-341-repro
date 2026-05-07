import { Pressable, Text, View } from 'react-native';

import { copy786 } from '../generated/copy/copy786';
import { layout786 } from '../generated/layouts/layout786';
import { palette786 } from '../generated/palettes/palette786';

export function Screen786() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout786.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy786.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy786.detail} / {palette786.name}
			</Text>
		</View>
	);
}
