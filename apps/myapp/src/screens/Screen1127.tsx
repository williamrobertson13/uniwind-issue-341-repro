import { Pressable, Text, View } from 'react-native';

import { copy1127 } from '../generated/copy/copy1127';
import { layout1127 } from '../generated/layouts/layout1127';
import { palette1127 } from '../generated/palettes/palette1127';

export function Screen1127() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1127.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1127.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1127.detail} / {palette1127.name}
			</Text>
		</View>
	);
}
