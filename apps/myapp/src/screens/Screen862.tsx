import { Pressable, Text, View } from 'react-native';

import { copy862 } from '../generated/copy/copy862';
import { layout862 } from '../generated/layouts/layout862';
import { palette862 } from '../generated/palettes/palette862';

export function Screen862() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout862.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy862.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy862.detail} / {palette862.name}
			</Text>
		</View>
	);
}
