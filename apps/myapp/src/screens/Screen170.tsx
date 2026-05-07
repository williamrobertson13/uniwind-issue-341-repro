import { Pressable, Text, View } from 'react-native';

import { copy170 } from '../generated/copy/copy170';
import { layout170 } from '../generated/layouts/layout170';
import { palette170 } from '../generated/palettes/palette170';

export function Screen170() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout170.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy170.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy170.detail} / {palette170.name}
			</Text>
		</View>
	);
}
