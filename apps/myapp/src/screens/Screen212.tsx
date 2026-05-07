import { Pressable, Text, View } from 'react-native';

import { copy212 } from '../generated/copy/copy212';
import { layout212 } from '../generated/layouts/layout212';
import { palette212 } from '../generated/palettes/palette212';

export function Screen212() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout212.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy212.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy212.detail} / {palette212.name}
			</Text>
		</View>
	);
}
