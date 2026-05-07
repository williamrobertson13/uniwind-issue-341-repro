import { Pressable, Text, View } from 'react-native';

import { copy267 } from '../generated/copy/copy267';
import { layout267 } from '../generated/layouts/layout267';
import { palette267 } from '../generated/palettes/palette267';

export function Screen267() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout267.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy267.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy267.detail} / {palette267.name}
			</Text>
		</View>
	);
}
