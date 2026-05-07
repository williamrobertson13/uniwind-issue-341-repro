import { Pressable, Text, View } from 'react-native';

import { copy130 } from '../generated/copy/copy130';
import { layout130 } from '../generated/layouts/layout130';
import { palette130 } from '../generated/palettes/palette130';

export function Screen130() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout130.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy130.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy130.detail} / {palette130.name}
			</Text>
		</View>
	);
}
