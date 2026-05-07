import { Pressable, Text, View } from 'react-native';

import { copy291 } from '../generated/copy/copy291';
import { layout291 } from '../generated/layouts/layout291';
import { palette291 } from '../generated/palettes/palette291';

export function Screen291() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout291.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy291.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy291.detail} / {palette291.name}
			</Text>
		</View>
	);
}
