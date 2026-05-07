import { Pressable, Text, View } from 'react-native';

import { copy765 } from '../generated/copy/copy765';
import { layout765 } from '../generated/layouts/layout765';
import { palette765 } from '../generated/palettes/palette765';

export function Screen765() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout765.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy765.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy765.detail} / {palette765.name}
			</Text>
		</View>
	);
}
