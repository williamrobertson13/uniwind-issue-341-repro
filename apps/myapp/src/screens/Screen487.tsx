import { Pressable, Text, View } from 'react-native';

import { copy487 } from '../generated/copy/copy487';
import { layout487 } from '../generated/layouts/layout487';
import { palette487 } from '../generated/palettes/palette487';

export function Screen487() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout487.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy487.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy487.detail} / {palette487.name}
			</Text>
		</View>
	);
}
