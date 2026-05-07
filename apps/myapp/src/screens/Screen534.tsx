import { Pressable, Text, View } from 'react-native';

import { copy534 } from '../generated/copy/copy534';
import { layout534 } from '../generated/layouts/layout534';
import { palette534 } from '../generated/palettes/palette534';

export function Screen534() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout534.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy534.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy534.detail} / {palette534.name}
			</Text>
		</View>
	);
}
