import { Pressable, Text, View } from 'react-native';

import { copy408 } from '../generated/copy/copy408';
import { layout408 } from '../generated/layouts/layout408';
import { palette408 } from '../generated/palettes/palette408';

export function Screen408() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout408.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy408.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy408.detail} / {palette408.name}
			</Text>
		</View>
	);
}
