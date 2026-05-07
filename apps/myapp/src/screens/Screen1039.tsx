import { Pressable, Text, View } from 'react-native';

import { copy1039 } from '../generated/copy/copy1039';
import { layout1039 } from '../generated/layouts/layout1039';
import { palette1039 } from '../generated/palettes/palette1039';

export function Screen1039() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1039.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1039.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1039.detail} / {palette1039.name}
			</Text>
		</View>
	);
}
