import { Pressable, Text, View } from 'react-native';

import { copy69 } from '../generated/copy/copy69';
import { layout69 } from '../generated/layouts/layout69';
import { palette69 } from '../generated/palettes/palette69';

export function Screen69() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout69.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy69.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy69.detail} / {palette69.name}
			</Text>
		</View>
	);
}
