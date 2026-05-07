import { Pressable, Text, View } from 'react-native';

import { copy813 } from '../generated/copy/copy813';
import { layout813 } from '../generated/layouts/layout813';
import { palette813 } from '../generated/palettes/palette813';

export function Screen813() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout813.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy813.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy813.detail} / {palette813.name}
			</Text>
		</View>
	);
}
