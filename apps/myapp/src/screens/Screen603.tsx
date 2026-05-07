import { Pressable, Text, View } from 'react-native';

import { copy603 } from '../generated/copy/copy603';
import { layout603 } from '../generated/layouts/layout603';
import { palette603 } from '../generated/palettes/palette603';

export function Screen603() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout603.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy603.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy603.detail} / {palette603.name}
			</Text>
		</View>
	);
}
