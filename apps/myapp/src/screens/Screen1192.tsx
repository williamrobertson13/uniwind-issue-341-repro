import { Pressable, Text, View } from 'react-native';

import { copy1192 } from '../generated/copy/copy1192';
import { layout1192 } from '../generated/layouts/layout1192';
import { palette1192 } from '../generated/palettes/palette1192';

export function Screen1192() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1192.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1192.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1192.detail} / {palette1192.name}
			</Text>
		</View>
	);
}
