import { Pressable, Text, View } from 'react-native';

import { copy275 } from '../generated/copy/copy275';
import { layout275 } from '../generated/layouts/layout275';
import { palette275 } from '../generated/palettes/palette275';

export function Screen275() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout275.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy275.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy275.detail} / {palette275.name}
			</Text>
		</View>
	);
}
