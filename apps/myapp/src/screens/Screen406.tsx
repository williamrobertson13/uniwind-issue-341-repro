import { Pressable, Text, View } from 'react-native';

import { copy406 } from '../generated/copy/copy406';
import { layout406 } from '../generated/layouts/layout406';
import { palette406 } from '../generated/palettes/palette406';

export function Screen406() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout406.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy406.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy406.detail} / {palette406.name}
			</Text>
		</View>
	);
}
