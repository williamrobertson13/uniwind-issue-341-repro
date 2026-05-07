import { Pressable, Text, View } from 'react-native';

import { copy516 } from '../generated/copy/copy516';
import { layout516 } from '../generated/layouts/layout516';
import { palette516 } from '../generated/palettes/palette516';

export function Screen516() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout516.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy516.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy516.detail} / {palette516.name}
			</Text>
		</View>
	);
}
