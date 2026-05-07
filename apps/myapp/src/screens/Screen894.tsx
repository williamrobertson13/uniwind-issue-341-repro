import { Pressable, Text, View } from 'react-native';

import { copy894 } from '../generated/copy/copy894';
import { layout894 } from '../generated/layouts/layout894';
import { palette894 } from '../generated/palettes/palette894';

export function Screen894() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout894.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy894.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy894.detail} / {palette894.name}
			</Text>
		</View>
	);
}
