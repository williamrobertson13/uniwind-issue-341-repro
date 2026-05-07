import { Pressable, Text, View } from 'react-native';

import { copy501 } from '../generated/copy/copy501';
import { layout501 } from '../generated/layouts/layout501';
import { palette501 } from '../generated/palettes/palette501';

export function Screen501() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout501.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy501.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy501.detail} / {palette501.name}
			</Text>
		</View>
	);
}
