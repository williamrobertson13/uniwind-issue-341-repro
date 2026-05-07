import { Pressable, Text, View } from 'react-native';

import { copy559 } from '../generated/copy/copy559';
import { layout559 } from '../generated/layouts/layout559';
import { palette559 } from '../generated/palettes/palette559';

export function Screen559() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout559.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy559.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy559.detail} / {palette559.name}
			</Text>
		</View>
	);
}
