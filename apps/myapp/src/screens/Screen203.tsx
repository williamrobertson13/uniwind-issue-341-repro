import { Pressable, Text, View } from 'react-native';

import { copy203 } from '../generated/copy/copy203';
import { layout203 } from '../generated/layouts/layout203';
import { palette203 } from '../generated/palettes/palette203';

export function Screen203() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout203.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy203.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy203.detail} / {palette203.name}
			</Text>
		</View>
	);
}
