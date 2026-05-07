import { Pressable, Text, View } from 'react-native';

import { copy796 } from '../generated/copy/copy796';
import { layout796 } from '../generated/layouts/layout796';
import { palette796 } from '../generated/palettes/palette796';

export function Screen796() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout796.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy796.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy796.detail} / {palette796.name}
			</Text>
		</View>
	);
}
