import { Pressable, Text, View } from 'react-native';

import { copy1249 } from '../generated/copy/copy1249';
import { layout1249 } from '../generated/layouts/layout1249';
import { palette1249 } from '../generated/palettes/palette1249';

export function Screen1249() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1249.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1249.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1249.detail} / {palette1249.name}
			</Text>
		</View>
	);
}
