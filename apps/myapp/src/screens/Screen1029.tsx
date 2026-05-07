import { Pressable, Text, View } from 'react-native';

import { copy1029 } from '../generated/copy/copy1029';
import { layout1029 } from '../generated/layouts/layout1029';
import { palette1029 } from '../generated/palettes/palette1029';

export function Screen1029() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1029.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1029.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1029.detail} / {palette1029.name}
			</Text>
		</View>
	);
}
