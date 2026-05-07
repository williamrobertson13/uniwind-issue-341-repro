import { Pressable, Text, View } from 'react-native';

import { copy619 } from '../generated/copy/copy619';
import { layout619 } from '../generated/layouts/layout619';
import { palette619 } from '../generated/palettes/palette619';

export function Screen619() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout619.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy619.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy619.detail} / {palette619.name}
			</Text>
		</View>
	);
}
