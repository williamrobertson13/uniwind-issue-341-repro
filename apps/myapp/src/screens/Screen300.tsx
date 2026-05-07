import { Pressable, Text, View } from 'react-native';

import { copy300 } from '../generated/copy/copy300';
import { layout300 } from '../generated/layouts/layout300';
import { palette300 } from '../generated/palettes/palette300';

export function Screen300() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout300.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy300.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy300.detail} / {palette300.name}
			</Text>
		</View>
	);
}
