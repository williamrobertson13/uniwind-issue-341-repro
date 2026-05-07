import { Pressable, Text, View } from 'react-native';

import { copy151 } from '../generated/copy/copy151';
import { layout151 } from '../generated/layouts/layout151';
import { palette151 } from '../generated/palettes/palette151';

export function Screen151() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout151.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy151.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy151.detail} / {palette151.name}
			</Text>
		</View>
	);
}
