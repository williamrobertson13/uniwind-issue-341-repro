import { Pressable, Text, View } from 'react-native';

import { copy826 } from '../generated/copy/copy826';
import { layout826 } from '../generated/layouts/layout826';
import { palette826 } from '../generated/palettes/palette826';

export function Screen826() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout826.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy826.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy826.detail} / {palette826.name}
			</Text>
		</View>
	);
}
