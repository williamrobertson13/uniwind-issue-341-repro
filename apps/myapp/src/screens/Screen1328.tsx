import { Pressable, Text, View } from 'react-native';

import { copy1328 } from '../generated/copy/copy1328';
import { layout1328 } from '../generated/layouts/layout1328';
import { palette1328 } from '../generated/palettes/palette1328';

export function Screen1328() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1328.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1328.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1328.detail} / {palette1328.name}
			</Text>
		</View>
	);
}
