import { Pressable, Text, View } from 'react-native';

import { copy978 } from '../generated/copy/copy978';
import { layout978 } from '../generated/layouts/layout978';
import { palette978 } from '../generated/palettes/palette978';

export function Screen978() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout978.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy978.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy978.detail} / {palette978.name}
			</Text>
		</View>
	);
}
