import { Pressable, Text, View } from 'react-native';

import { copy42 } from '../generated/copy/copy42';
import { layout42 } from '../generated/layouts/layout42';
import { palette42 } from '../generated/palettes/palette42';

export function Screen42() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout42.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy42.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy42.detail} / {palette42.name}
			</Text>
		</View>
	);
}
