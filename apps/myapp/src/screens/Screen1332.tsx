import { Pressable, Text, View } from 'react-native';

import { copy1332 } from '../generated/copy/copy1332';
import { layout1332 } from '../generated/layouts/layout1332';
import { palette1332 } from '../generated/palettes/palette1332';

export function Screen1332() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1332.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1332.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1332.detail} / {palette1332.name}
			</Text>
		</View>
	);
}
