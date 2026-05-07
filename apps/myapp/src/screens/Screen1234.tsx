import { Pressable, Text, View } from 'react-native';

import { copy1234 } from '../generated/copy/copy1234';
import { layout1234 } from '../generated/layouts/layout1234';
import { palette1234 } from '../generated/palettes/palette1234';

export function Screen1234() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1234.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1234.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1234.detail} / {palette1234.name}
			</Text>
		</View>
	);
}
