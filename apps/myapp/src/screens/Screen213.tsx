import { Pressable, Text, View } from 'react-native';

import { copy213 } from '../generated/copy/copy213';
import { layout213 } from '../generated/layouts/layout213';
import { palette213 } from '../generated/palettes/palette213';

export function Screen213() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout213.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy213.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy213.detail} / {palette213.name}
			</Text>
		</View>
	);
}
