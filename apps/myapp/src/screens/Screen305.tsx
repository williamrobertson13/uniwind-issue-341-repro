import { Pressable, Text, View } from 'react-native';

import { copy305 } from '../generated/copy/copy305';
import { layout305 } from '../generated/layouts/layout305';
import { palette305 } from '../generated/palettes/palette305';

export function Screen305() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout305.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy305.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy305.detail} / {palette305.name}
			</Text>
		</View>
	);
}
