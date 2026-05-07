import { Pressable, Text, View } from 'react-native';

import { copy879 } from '../generated/copy/copy879';
import { layout879 } from '../generated/layouts/layout879';
import { palette879 } from '../generated/palettes/palette879';

export function Screen879() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout879.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy879.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy879.detail} / {palette879.name}
			</Text>
		</View>
	);
}
