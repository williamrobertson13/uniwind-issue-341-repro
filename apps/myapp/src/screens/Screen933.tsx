import { Pressable, Text, View } from 'react-native';

import { copy933 } from '../generated/copy/copy933';
import { layout933 } from '../generated/layouts/layout933';
import { palette933 } from '../generated/palettes/palette933';

export function Screen933() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout933.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy933.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy933.detail} / {palette933.name}
			</Text>
		</View>
	);
}
