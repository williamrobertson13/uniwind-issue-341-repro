import { Pressable, Text, View } from 'react-native';

import { copy850 } from '../generated/copy/copy850';
import { layout850 } from '../generated/layouts/layout850';
import { palette850 } from '../generated/palettes/palette850';

export function Screen850() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout850.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy850.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy850.detail} / {palette850.name}
			</Text>
		</View>
	);
}
