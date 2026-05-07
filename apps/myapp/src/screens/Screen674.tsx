import { Pressable, Text, View } from 'react-native';

import { copy674 } from '../generated/copy/copy674';
import { layout674 } from '../generated/layouts/layout674';
import { palette674 } from '../generated/palettes/palette674';

export function Screen674() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout674.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy674.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy674.detail} / {palette674.name}
			</Text>
		</View>
	);
}
