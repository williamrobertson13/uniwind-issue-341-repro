import { Pressable, Text, View } from 'react-native';

import { copy201 } from '../generated/copy/copy201';
import { layout201 } from '../generated/layouts/layout201';
import { palette201 } from '../generated/palettes/palette201';

export function Screen201() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout201.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy201.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy201.detail} / {palette201.name}
			</Text>
		</View>
	);
}
