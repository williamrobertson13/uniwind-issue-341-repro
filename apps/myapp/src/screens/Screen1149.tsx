import { Pressable, Text, View } from 'react-native';

import { copy1149 } from '../generated/copy/copy1149';
import { layout1149 } from '../generated/layouts/layout1149';
import { palette1149 } from '../generated/palettes/palette1149';

export function Screen1149() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1149.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1149.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1149.detail} / {palette1149.name}
			</Text>
		</View>
	);
}
