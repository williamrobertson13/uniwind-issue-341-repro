import { Pressable, Text, View } from 'react-native';

import { copy883 } from '../generated/copy/copy883';
import { layout883 } from '../generated/layouts/layout883';
import { palette883 } from '../generated/palettes/palette883';

export function Screen883() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout883.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy883.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy883.detail} / {palette883.name}
			</Text>
		</View>
	);
}
