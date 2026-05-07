import { Pressable, Text, View } from 'react-native';

import { copy570 } from '../generated/copy/copy570';
import { layout570 } from '../generated/layouts/layout570';
import { palette570 } from '../generated/palettes/palette570';

export function Screen570() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout570.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy570.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy570.detail} / {palette570.name}
			</Text>
		</View>
	);
}
