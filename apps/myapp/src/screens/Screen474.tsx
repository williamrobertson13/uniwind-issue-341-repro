import { Pressable, Text, View } from 'react-native';

import { copy474 } from '../generated/copy/copy474';
import { layout474 } from '../generated/layouts/layout474';
import { palette474 } from '../generated/palettes/palette474';

export function Screen474() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout474.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy474.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy474.detail} / {palette474.name}
			</Text>
		</View>
	);
}
