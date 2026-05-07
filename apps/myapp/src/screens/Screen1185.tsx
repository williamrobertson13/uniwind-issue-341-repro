import { Pressable, Text, View } from 'react-native';

import { copy1185 } from '../generated/copy/copy1185';
import { layout1185 } from '../generated/layouts/layout1185';
import { palette1185 } from '../generated/palettes/palette1185';

export function Screen1185() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1185.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1185.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1185.detail} / {palette1185.name}
			</Text>
		</View>
	);
}
