import { Pressable, Text, View } from 'react-native';

import { copy80 } from '../generated/copy/copy80';
import { layout80 } from '../generated/layouts/layout80';
import { palette80 } from '../generated/palettes/palette80';

export function Screen80() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout80.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy80.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy80.detail} / {palette80.name}
			</Text>
		</View>
	);
}
