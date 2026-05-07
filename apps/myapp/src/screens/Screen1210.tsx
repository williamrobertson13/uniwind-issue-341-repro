import { Pressable, Text, View } from 'react-native';

import { copy1210 } from '../generated/copy/copy1210';
import { layout1210 } from '../generated/layouts/layout1210';
import { palette1210 } from '../generated/palettes/palette1210';

export function Screen1210() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1210.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1210.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1210.detail} / {palette1210.name}
			</Text>
		</View>
	);
}
