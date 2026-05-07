import { Pressable, Text, View } from 'react-native';

import { copy1162 } from '../generated/copy/copy1162';
import { layout1162 } from '../generated/layouts/layout1162';
import { palette1162 } from '../generated/palettes/palette1162';

export function Screen1162() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1162.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1162.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1162.detail} / {palette1162.name}
			</Text>
		</View>
	);
}
