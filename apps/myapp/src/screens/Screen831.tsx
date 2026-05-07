import { Pressable, Text, View } from 'react-native';

import { copy831 } from '../generated/copy/copy831';
import { layout831 } from '../generated/layouts/layout831';
import { palette831 } from '../generated/palettes/palette831';

export function Screen831() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout831.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy831.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy831.detail} / {palette831.name}
			</Text>
		</View>
	);
}
