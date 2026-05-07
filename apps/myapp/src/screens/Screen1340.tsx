import { Pressable, Text, View } from 'react-native';

import { copy1340 } from '../generated/copy/copy1340';
import { layout1340 } from '../generated/layouts/layout1340';
import { palette1340 } from '../generated/palettes/palette1340';

export function Screen1340() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1340.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1340.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1340.detail} / {palette1340.name}
			</Text>
		</View>
	);
}
