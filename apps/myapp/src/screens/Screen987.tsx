import { Pressable, Text, View } from 'react-native';

import { copy987 } from '../generated/copy/copy987';
import { layout987 } from '../generated/layouts/layout987';
import { palette987 } from '../generated/palettes/palette987';

export function Screen987() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout987.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy987.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy987.detail} / {palette987.name}
			</Text>
		</View>
	);
}
