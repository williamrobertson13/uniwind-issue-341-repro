import { Pressable, Text, View } from 'react-native';

import { copy187 } from '../generated/copy/copy187';
import { layout187 } from '../generated/layouts/layout187';
import { palette187 } from '../generated/palettes/palette187';

export function Screen187() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout187.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy187.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy187.detail} / {palette187.name}
			</Text>
		</View>
	);
}
