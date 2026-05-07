import { Pressable, Text, View } from 'react-native';

import { copy527 } from '../generated/copy/copy527';
import { layout527 } from '../generated/layouts/layout527';
import { palette527 } from '../generated/palettes/palette527';

export function Screen527() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout527.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy527.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy527.detail} / {palette527.name}
			</Text>
		</View>
	);
}
