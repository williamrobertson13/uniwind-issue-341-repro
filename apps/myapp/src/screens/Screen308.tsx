import { Pressable, Text, View } from 'react-native';

import { copy308 } from '../generated/copy/copy308';
import { layout308 } from '../generated/layouts/layout308';
import { palette308 } from '../generated/palettes/palette308';

export function Screen308() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout308.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy308.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy308.detail} / {palette308.name}
			</Text>
		</View>
	);
}
