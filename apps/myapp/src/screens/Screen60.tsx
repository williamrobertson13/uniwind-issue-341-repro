import { Pressable, Text, View } from 'react-native';

import { copy60 } from '../generated/copy/copy60';
import { layout60 } from '../generated/layouts/layout60';
import { palette60 } from '../generated/palettes/palette60';

export function Screen60() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout60.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy60.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy60.detail} / {palette60.name}
			</Text>
		</View>
	);
}
