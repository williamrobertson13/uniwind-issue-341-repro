import { Pressable, Text, View } from 'react-native';

import { copy95 } from '../generated/copy/copy95';
import { layout95 } from '../generated/layouts/layout95';
import { palette95 } from '../generated/palettes/palette95';

export function Screen95() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout95.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy95.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy95.detail} / {palette95.name}
			</Text>
		</View>
	);
}
