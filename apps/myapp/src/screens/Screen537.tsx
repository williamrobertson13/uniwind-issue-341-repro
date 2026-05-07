import { Pressable, Text, View } from 'react-native';

import { copy537 } from '../generated/copy/copy537';
import { layout537 } from '../generated/layouts/layout537';
import { palette537 } from '../generated/palettes/palette537';

export function Screen537() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout537.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy537.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy537.detail} / {palette537.name}
			</Text>
		</View>
	);
}
