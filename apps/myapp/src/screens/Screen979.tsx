import { Pressable, Text, View } from 'react-native';

import { copy979 } from '../generated/copy/copy979';
import { layout979 } from '../generated/layouts/layout979';
import { palette979 } from '../generated/palettes/palette979';

export function Screen979() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout979.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy979.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy979.detail} / {palette979.name}
			</Text>
		</View>
	);
}
