import { Pressable, Text, View } from 'react-native';

import { copy1113 } from '../generated/copy/copy1113';
import { layout1113 } from '../generated/layouts/layout1113';
import { palette1113 } from '../generated/palettes/palette1113';

export function Screen1113() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1113.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1113.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1113.detail} / {palette1113.name}
			</Text>
		</View>
	);
}
