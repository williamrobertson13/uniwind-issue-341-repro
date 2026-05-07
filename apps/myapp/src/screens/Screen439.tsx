import { Pressable, Text, View } from 'react-native';

import { copy439 } from '../generated/copy/copy439';
import { layout439 } from '../generated/layouts/layout439';
import { palette439 } from '../generated/palettes/palette439';

export function Screen439() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout439.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy439.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy439.detail} / {palette439.name}
			</Text>
		</View>
	);
}
