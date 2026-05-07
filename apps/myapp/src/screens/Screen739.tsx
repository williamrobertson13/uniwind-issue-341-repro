import { Pressable, Text, View } from 'react-native';

import { copy739 } from '../generated/copy/copy739';
import { layout739 } from '../generated/layouts/layout739';
import { palette739 } from '../generated/palettes/palette739';

export function Screen739() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout739.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy739.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy739.detail} / {palette739.name}
			</Text>
		</View>
	);
}
