import { Pressable, Text, View } from 'react-native';

import { copy707 } from '../generated/copy/copy707';
import { layout707 } from '../generated/layouts/layout707';
import { palette707 } from '../generated/palettes/palette707';

export function Screen707() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout707.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy707.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy707.detail} / {palette707.name}
			</Text>
		</View>
	);
}
