import { Pressable, Text, View } from 'react-native';

import { copy498 } from '../generated/copy/copy498';
import { layout498 } from '../generated/layouts/layout498';
import { palette498 } from '../generated/palettes/palette498';

export function Screen498() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout498.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy498.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy498.detail} / {palette498.name}
			</Text>
		</View>
	);
}
