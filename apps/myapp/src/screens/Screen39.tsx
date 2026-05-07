import { Pressable, Text, View } from 'react-native';

import { copy39 } from '../generated/copy/copy39';
import { layout39 } from '../generated/layouts/layout39';
import { palette39 } from '../generated/palettes/palette39';

export function Screen39() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout39.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy39.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy39.detail} / {palette39.name}
			</Text>
		</View>
	);
}
