import { Pressable, Text, View } from 'react-native';

import { copy386 } from '../generated/copy/copy386';
import { layout386 } from '../generated/layouts/layout386';
import { palette386 } from '../generated/palettes/palette386';

export function Screen386() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout386.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy386.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy386.detail} / {palette386.name}
			</Text>
		</View>
	);
}
