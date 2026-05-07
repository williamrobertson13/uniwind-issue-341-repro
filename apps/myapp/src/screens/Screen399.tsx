import { Pressable, Text, View } from 'react-native';

import { copy399 } from '../generated/copy/copy399';
import { layout399 } from '../generated/layouts/layout399';
import { palette399 } from '../generated/palettes/palette399';

export function Screen399() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout399.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy399.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy399.detail} / {palette399.name}
			</Text>
		</View>
	);
}
