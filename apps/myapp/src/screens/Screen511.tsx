import { Pressable, Text, View } from 'react-native';

import { copy511 } from '../generated/copy/copy511';
import { layout511 } from '../generated/layouts/layout511';
import { palette511 } from '../generated/palettes/palette511';

export function Screen511() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout511.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy511.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy511.detail} / {palette511.name}
			</Text>
		</View>
	);
}
