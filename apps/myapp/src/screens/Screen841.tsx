import { Pressable, Text, View } from 'react-native';

import { copy841 } from '../generated/copy/copy841';
import { layout841 } from '../generated/layouts/layout841';
import { palette841 } from '../generated/palettes/palette841';

export function Screen841() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout841.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy841.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy841.detail} / {palette841.name}
			</Text>
		</View>
	);
}
