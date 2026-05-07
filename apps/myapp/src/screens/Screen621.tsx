import { Pressable, Text, View } from 'react-native';

import { copy621 } from '../generated/copy/copy621';
import { layout621 } from '../generated/layouts/layout621';
import { palette621 } from '../generated/palettes/palette621';

export function Screen621() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout621.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy621.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy621.detail} / {palette621.name}
			</Text>
		</View>
	);
}
