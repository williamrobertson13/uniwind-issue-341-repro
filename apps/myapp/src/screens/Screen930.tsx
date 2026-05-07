import { Pressable, Text, View } from 'react-native';

import { copy930 } from '../generated/copy/copy930';
import { layout930 } from '../generated/layouts/layout930';
import { palette930 } from '../generated/palettes/palette930';

export function Screen930() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout930.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy930.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy930.detail} / {palette930.name}
			</Text>
		</View>
	);
}
