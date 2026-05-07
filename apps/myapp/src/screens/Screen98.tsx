import { Pressable, Text, View } from 'react-native';

import { copy98 } from '../generated/copy/copy98';
import { layout98 } from '../generated/layouts/layout98';
import { palette98 } from '../generated/palettes/palette98';

export function Screen98() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout98.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy98.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy98.detail} / {palette98.name}
			</Text>
		</View>
	);
}
