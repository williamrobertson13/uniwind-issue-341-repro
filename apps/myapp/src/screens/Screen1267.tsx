import { Pressable, Text, View } from 'react-native';

import { copy1267 } from '../generated/copy/copy1267';
import { layout1267 } from '../generated/layouts/layout1267';
import { palette1267 } from '../generated/palettes/palette1267';

export function Screen1267() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1267.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1267.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1267.detail} / {palette1267.name}
			</Text>
		</View>
	);
}
