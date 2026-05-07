import { Pressable, Text, View } from 'react-native';

import { copy590 } from '../generated/copy/copy590';
import { layout590 } from '../generated/layouts/layout590';
import { palette590 } from '../generated/palettes/palette590';

export function Screen590() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout590.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy590.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy590.detail} / {palette590.name}
			</Text>
		</View>
	);
}
