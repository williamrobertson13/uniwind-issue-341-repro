import { Pressable, Text, View } from 'react-native';

import { copy947 } from '../generated/copy/copy947';
import { layout947 } from '../generated/layouts/layout947';
import { palette947 } from '../generated/palettes/palette947';

export function Screen947() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout947.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy947.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy947.detail} / {palette947.name}
			</Text>
		</View>
	);
}
