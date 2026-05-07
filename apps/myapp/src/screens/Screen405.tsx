import { Pressable, Text, View } from 'react-native';

import { copy405 } from '../generated/copy/copy405';
import { layout405 } from '../generated/layouts/layout405';
import { palette405 } from '../generated/palettes/palette405';

export function Screen405() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout405.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy405.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy405.detail} / {palette405.name}
			</Text>
		</View>
	);
}
