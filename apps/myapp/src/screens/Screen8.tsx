import { Pressable, Text, View } from 'react-native';

import { copy8 } from '../generated/copy/copy8';
import { layout8 } from '../generated/layouts/layout8';
import { palette8 } from '../generated/palettes/palette8';

export function Screen8() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout8.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy8.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy8.detail} / {palette8.name}
			</Text>
		</View>
	);
}
