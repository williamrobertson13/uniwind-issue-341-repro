import { Pressable, Text, View } from 'react-native';

import { copy586 } from '../generated/copy/copy586';
import { layout586 } from '../generated/layouts/layout586';
import { palette586 } from '../generated/palettes/palette586';

export function Screen586() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout586.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy586.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy586.detail} / {palette586.name}
			</Text>
		</View>
	);
}
