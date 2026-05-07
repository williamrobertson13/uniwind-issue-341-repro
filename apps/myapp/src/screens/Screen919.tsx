import { Pressable, Text, View } from 'react-native';

import { copy919 } from '../generated/copy/copy919';
import { layout919 } from '../generated/layouts/layout919';
import { palette919 } from '../generated/palettes/palette919';

export function Screen919() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout919.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy919.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy919.detail} / {palette919.name}
			</Text>
		</View>
	);
}
