import { Pressable, Text, View } from 'react-native';

import { copy568 } from '../generated/copy/copy568';
import { layout568 } from '../generated/layouts/layout568';
import { palette568 } from '../generated/palettes/palette568';

export function Screen568() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout568.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy568.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy568.detail} / {palette568.name}
			</Text>
		</View>
	);
}
