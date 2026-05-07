import { Pressable, Text, View } from 'react-native';

import { copy196 } from '../generated/copy/copy196';
import { layout196 } from '../generated/layouts/layout196';
import { palette196 } from '../generated/palettes/palette196';

export function Screen196() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout196.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy196.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy196.detail} / {palette196.name}
			</Text>
		</View>
	);
}
