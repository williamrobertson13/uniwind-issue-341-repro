import { Pressable, Text, View } from 'react-native';

import { copy1091 } from '../generated/copy/copy1091';
import { layout1091 } from '../generated/layouts/layout1091';
import { palette1091 } from '../generated/palettes/palette1091';

export function Screen1091() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1091.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1091.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1091.detail} / {palette1091.name}
			</Text>
		</View>
	);
}
