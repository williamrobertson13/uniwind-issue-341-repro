import { Pressable, Text, View } from 'react-native';

import { copy718 } from '../generated/copy/copy718';
import { layout718 } from '../generated/layouts/layout718';
import { palette718 } from '../generated/palettes/palette718';

export function Screen718() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout718.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy718.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy718.detail} / {palette718.name}
			</Text>
		</View>
	);
}
