import { Pressable, Text, View } from 'react-native';

import { copy40 } from '../generated/copy/copy40';
import { layout40 } from '../generated/layouts/layout40';
import { palette40 } from '../generated/palettes/palette40';

export function Screen40() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout40.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy40.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy40.detail} / {palette40.name}
			</Text>
		</View>
	);
}
