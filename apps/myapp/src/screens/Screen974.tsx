import { Pressable, Text, View } from 'react-native';

import { copy974 } from '../generated/copy/copy974';
import { layout974 } from '../generated/layouts/layout974';
import { palette974 } from '../generated/palettes/palette974';

export function Screen974() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout974.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy974.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy974.detail} / {palette974.name}
			</Text>
		</View>
	);
}
