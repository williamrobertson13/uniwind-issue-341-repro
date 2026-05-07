import { Pressable, Text, View } from 'react-native';

import { copy497 } from '../generated/copy/copy497';
import { layout497 } from '../generated/layouts/layout497';
import { palette497 } from '../generated/palettes/palette497';

export function Screen497() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout497.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy497.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy497.detail} / {palette497.name}
			</Text>
		</View>
	);
}
