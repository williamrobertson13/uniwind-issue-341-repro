import { Pressable, Text, View } from 'react-native';

import { copy255 } from '../generated/copy/copy255';
import { layout255 } from '../generated/layouts/layout255';
import { palette255 } from '../generated/palettes/palette255';

export function Screen255() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout255.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy255.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy255.detail} / {palette255.name}
			</Text>
		</View>
	);
}
