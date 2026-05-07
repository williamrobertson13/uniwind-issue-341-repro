import { Pressable, Text, View } from 'react-native';

import { copy371 } from '../generated/copy/copy371';
import { layout371 } from '../generated/layouts/layout371';
import { palette371 } from '../generated/palettes/palette371';

export function Screen371() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout371.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy371.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy371.detail} / {palette371.name}
			</Text>
		</View>
	);
}
