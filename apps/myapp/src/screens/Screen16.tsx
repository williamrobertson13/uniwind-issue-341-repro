import { Pressable, Text, View } from 'react-native';

import { copy16 } from '../generated/copy/copy16';
import { layout16 } from '../generated/layouts/layout16';
import { palette16 } from '../generated/palettes/palette16';

export function Screen16() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout16.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy16.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy16.detail} / {palette16.name}
			</Text>
		</View>
	);
}
