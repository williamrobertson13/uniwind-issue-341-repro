import { Pressable, Text, View } from 'react-native';

import { copy330 } from '../generated/copy/copy330';
import { layout330 } from '../generated/layouts/layout330';
import { palette330 } from '../generated/palettes/palette330';

export function Screen330() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout330.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy330.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy330.detail} / {palette330.name}
			</Text>
		</View>
	);
}
