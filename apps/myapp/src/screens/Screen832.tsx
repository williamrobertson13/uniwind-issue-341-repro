import { Pressable, Text, View } from 'react-native';

import { copy832 } from '../generated/copy/copy832';
import { layout832 } from '../generated/layouts/layout832';
import { palette832 } from '../generated/palettes/palette832';

export function Screen832() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout832.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy832.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy832.detail} / {palette832.name}
			</Text>
		</View>
	);
}
