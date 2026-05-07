import { Pressable, Text, View } from 'react-native';

import { copy99 } from '../generated/copy/copy99';
import { layout99 } from '../generated/layouts/layout99';
import { palette99 } from '../generated/palettes/palette99';

export function Screen99() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout99.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy99.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy99.detail} / {palette99.name}
			</Text>
		</View>
	);
}
