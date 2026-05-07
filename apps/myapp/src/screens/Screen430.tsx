import { Pressable, Text, View } from 'react-native';

import { copy430 } from '../generated/copy/copy430';
import { layout430 } from '../generated/layouts/layout430';
import { palette430 } from '../generated/palettes/palette430';

export function Screen430() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout430.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy430.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy430.detail} / {palette430.name}
			</Text>
		</View>
	);
}
