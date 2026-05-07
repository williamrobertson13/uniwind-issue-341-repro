import { Pressable, Text, View } from 'react-native';

import { copy634 } from '../generated/copy/copy634';
import { layout634 } from '../generated/layouts/layout634';
import { palette634 } from '../generated/palettes/palette634';

export function Screen634() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout634.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy634.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy634.detail} / {palette634.name}
			</Text>
		</View>
	);
}
