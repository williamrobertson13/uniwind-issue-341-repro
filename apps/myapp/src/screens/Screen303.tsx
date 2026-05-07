import { Pressable, Text, View } from 'react-native';

import { copy303 } from '../generated/copy/copy303';
import { layout303 } from '../generated/layouts/layout303';
import { palette303 } from '../generated/palettes/palette303';

export function Screen303() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout303.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy303.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy303.detail} / {palette303.name}
			</Text>
		</View>
	);
}
