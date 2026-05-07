import { Pressable, Text, View } from 'react-native';

import { copy943 } from '../generated/copy/copy943';
import { layout943 } from '../generated/layouts/layout943';
import { palette943 } from '../generated/palettes/palette943';

export function Screen943() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout943.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy943.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy943.detail} / {palette943.name}
			</Text>
		</View>
	);
}
