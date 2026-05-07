import { Pressable, Text, View } from 'react-native';

import { copy601 } from '../generated/copy/copy601';
import { layout601 } from '../generated/layouts/layout601';
import { palette601 } from '../generated/palettes/palette601';

export function Screen601() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout601.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy601.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy601.detail} / {palette601.name}
			</Text>
		</View>
	);
}
