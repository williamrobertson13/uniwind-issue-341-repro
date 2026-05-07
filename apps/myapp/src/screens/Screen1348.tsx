import { Pressable, Text, View } from 'react-native';

import { copy1348 } from '../generated/copy/copy1348';
import { layout1348 } from '../generated/layouts/layout1348';
import { palette1348 } from '../generated/palettes/palette1348';

export function Screen1348() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1348.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1348.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1348.detail} / {palette1348.name}
			</Text>
		</View>
	);
}
