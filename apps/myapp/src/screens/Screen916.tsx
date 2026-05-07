import { Pressable, Text, View } from 'react-native';

import { copy916 } from '../generated/copy/copy916';
import { layout916 } from '../generated/layouts/layout916';
import { palette916 } from '../generated/palettes/palette916';

export function Screen916() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout916.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy916.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy916.detail} / {palette916.name}
			</Text>
		</View>
	);
}
