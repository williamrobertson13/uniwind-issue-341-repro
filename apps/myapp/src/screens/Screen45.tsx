import { Pressable, Text, View } from 'react-native';

import { copy45 } from '../generated/copy/copy45';
import { layout45 } from '../generated/layouts/layout45';
import { palette45 } from '../generated/palettes/palette45';

export function Screen45() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout45.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy45.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy45.detail} / {palette45.name}
			</Text>
		</View>
	);
}
