import { Pressable, Text, View } from 'react-native';

import { copy539 } from '../generated/copy/copy539';
import { layout539 } from '../generated/layouts/layout539';
import { palette539 } from '../generated/palettes/palette539';

export function Screen539() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout539.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy539.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy539.detail} / {palette539.name}
			</Text>
		</View>
	);
}
