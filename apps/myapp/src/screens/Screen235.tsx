import { Pressable, Text, View } from 'react-native';

import { copy235 } from '../generated/copy/copy235';
import { layout235 } from '../generated/layouts/layout235';
import { palette235 } from '../generated/palettes/palette235';

export function Screen235() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout235.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy235.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy235.detail} / {palette235.name}
			</Text>
		</View>
	);
}
