import { Pressable, Text, View } from 'react-native';

import { copy1187 } from '../generated/copy/copy1187';
import { layout1187 } from '../generated/layouts/layout1187';
import { palette1187 } from '../generated/palettes/palette1187';

export function Screen1187() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1187.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1187.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1187.detail} / {palette1187.name}
			</Text>
		</View>
	);
}
