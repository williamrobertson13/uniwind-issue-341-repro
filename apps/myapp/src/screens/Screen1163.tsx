import { Pressable, Text, View } from 'react-native';

import { copy1163 } from '../generated/copy/copy1163';
import { layout1163 } from '../generated/layouts/layout1163';
import { palette1163 } from '../generated/palettes/palette1163';

export function Screen1163() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1163.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1163.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1163.detail} / {palette1163.name}
			</Text>
		</View>
	);
}
