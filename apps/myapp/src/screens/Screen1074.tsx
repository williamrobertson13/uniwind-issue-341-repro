import { Pressable, Text, View } from 'react-native';

import { copy1074 } from '../generated/copy/copy1074';
import { layout1074 } from '../generated/layouts/layout1074';
import { palette1074 } from '../generated/palettes/palette1074';

export function Screen1074() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1074.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1074.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1074.detail} / {palette1074.name}
			</Text>
		</View>
	);
}
