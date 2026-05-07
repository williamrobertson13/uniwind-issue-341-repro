import { Pressable, Text, View } from 'react-native';

import { copy682 } from '../generated/copy/copy682';
import { layout682 } from '../generated/layouts/layout682';
import { palette682 } from '../generated/palettes/palette682';

export function Screen682() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout682.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy682.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy682.detail} / {palette682.name}
			</Text>
		</View>
	);
}
