import { Pressable, Text, View } from 'react-native';

import { copy1102 } from '../generated/copy/copy1102';
import { layout1102 } from '../generated/layouts/layout1102';
import { palette1102 } from '../generated/palettes/palette1102';

export function Screen1102() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1102.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1102.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1102.detail} / {palette1102.name}
			</Text>
		</View>
	);
}
