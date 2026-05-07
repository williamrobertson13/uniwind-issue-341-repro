import { Pressable, Text, View } from 'react-native';

import { copy715 } from '../generated/copy/copy715';
import { layout715 } from '../generated/layouts/layout715';
import { palette715 } from '../generated/palettes/palette715';

export function Screen715() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout715.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy715.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy715.detail} / {palette715.name}
			</Text>
		</View>
	);
}
