import { Pressable, Text, View } from 'react-native';

import { copy192 } from '../generated/copy/copy192';
import { layout192 } from '../generated/layouts/layout192';
import { palette192 } from '../generated/palettes/palette192';

export function Screen192() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout192.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy192.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy192.detail} / {palette192.name}
			</Text>
		</View>
	);
}
