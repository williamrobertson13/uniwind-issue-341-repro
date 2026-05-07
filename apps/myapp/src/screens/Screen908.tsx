import { Pressable, Text, View } from 'react-native';

import { copy908 } from '../generated/copy/copy908';
import { layout908 } from '../generated/layouts/layout908';
import { palette908 } from '../generated/palettes/palette908';

export function Screen908() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout908.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy908.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy908.detail} / {palette908.name}
			</Text>
		</View>
	);
}
