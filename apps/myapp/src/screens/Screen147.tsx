import { Pressable, Text, View } from 'react-native';

import { copy147 } from '../generated/copy/copy147';
import { layout147 } from '../generated/layouts/layout147';
import { palette147 } from '../generated/palettes/palette147';

export function Screen147() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout147.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy147.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy147.detail} / {palette147.name}
			</Text>
		</View>
	);
}
