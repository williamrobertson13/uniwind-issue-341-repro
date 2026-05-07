import { Pressable, Text, View } from 'react-native';

import { copy990 } from '../generated/copy/copy990';
import { layout990 } from '../generated/layouts/layout990';
import { palette990 } from '../generated/palettes/palette990';

export function Screen990() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout990.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy990.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy990.detail} / {palette990.name}
			</Text>
		</View>
	);
}
