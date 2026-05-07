import { Pressable, Text, View } from 'react-native';

import { copy878 } from '../generated/copy/copy878';
import { layout878 } from '../generated/layouts/layout878';
import { palette878 } from '../generated/palettes/palette878';

export function Screen878() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout878.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy878.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy878.detail} / {palette878.name}
			</Text>
		</View>
	);
}
