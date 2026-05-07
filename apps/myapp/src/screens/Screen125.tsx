import { Pressable, Text, View } from 'react-native';

import { copy125 } from '../generated/copy/copy125';
import { layout125 } from '../generated/layouts/layout125';
import { palette125 } from '../generated/palettes/palette125';

export function Screen125() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout125.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy125.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy125.detail} / {palette125.name}
			</Text>
		</View>
	);
}
