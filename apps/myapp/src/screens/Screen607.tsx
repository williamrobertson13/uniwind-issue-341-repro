import { Pressable, Text, View } from 'react-native';

import { copy607 } from '../generated/copy/copy607';
import { layout607 } from '../generated/layouts/layout607';
import { palette607 } from '../generated/palettes/palette607';

export function Screen607() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout607.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy607.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy607.detail} / {palette607.name}
			</Text>
		</View>
	);
}
