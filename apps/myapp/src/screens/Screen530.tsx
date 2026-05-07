import { Pressable, Text, View } from 'react-native';

import { copy530 } from '../generated/copy/copy530';
import { layout530 } from '../generated/layouts/layout530';
import { palette530 } from '../generated/palettes/palette530';

export function Screen530() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout530.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy530.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy530.detail} / {palette530.name}
			</Text>
		</View>
	);
}
