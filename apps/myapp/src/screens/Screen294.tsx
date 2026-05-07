import { Pressable, Text, View } from 'react-native';

import { copy294 } from '../generated/copy/copy294';
import { layout294 } from '../generated/layouts/layout294';
import { palette294 } from '../generated/palettes/palette294';

export function Screen294() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout294.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy294.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy294.detail} / {palette294.name}
			</Text>
		</View>
	);
}
