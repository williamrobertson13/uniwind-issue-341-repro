import { Pressable, Text, View } from 'react-native';

import { copy1321 } from '../generated/copy/copy1321';
import { layout1321 } from '../generated/layouts/layout1321';
import { palette1321 } from '../generated/palettes/palette1321';

export function Screen1321() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1321.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1321.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1321.detail} / {palette1321.name}
			</Text>
		</View>
	);
}
