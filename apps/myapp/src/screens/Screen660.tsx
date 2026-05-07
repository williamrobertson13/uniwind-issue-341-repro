import { Pressable, Text, View } from 'react-native';

import { copy660 } from '../generated/copy/copy660';
import { layout660 } from '../generated/layouts/layout660';
import { palette660 } from '../generated/palettes/palette660';

export function Screen660() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout660.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy660.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy660.detail} / {palette660.name}
			</Text>
		</View>
	);
}
