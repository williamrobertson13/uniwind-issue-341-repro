import { Pressable, Text, View } from 'react-native';

import { copy143 } from '../generated/copy/copy143';
import { layout143 } from '../generated/layouts/layout143';
import { palette143 } from '../generated/palettes/palette143';

export function Screen143() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout143.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy143.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy143.detail} / {palette143.name}
			</Text>
		</View>
	);
}
