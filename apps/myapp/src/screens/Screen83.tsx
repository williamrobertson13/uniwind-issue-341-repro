import { Pressable, Text, View } from 'react-native';

import { copy83 } from '../generated/copy/copy83';
import { layout83 } from '../generated/layouts/layout83';
import { palette83 } from '../generated/palettes/palette83';

export function Screen83() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout83.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy83.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy83.detail} / {palette83.name}
			</Text>
		</View>
	);
}
