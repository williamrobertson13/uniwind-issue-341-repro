import { Pressable, Text, View } from 'react-native';

import { copy206 } from '../generated/copy/copy206';
import { layout206 } from '../generated/layouts/layout206';
import { palette206 } from '../generated/palettes/palette206';

export function Screen206() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout206.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy206.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy206.detail} / {palette206.name}
			</Text>
		</View>
	);
}
