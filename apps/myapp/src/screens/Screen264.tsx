import { Pressable, Text, View } from 'react-native';

import { copy264 } from '../generated/copy/copy264';
import { layout264 } from '../generated/layouts/layout264';
import { palette264 } from '../generated/palettes/palette264';

export function Screen264() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout264.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy264.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy264.detail} / {palette264.name}
			</Text>
		</View>
	);
}
