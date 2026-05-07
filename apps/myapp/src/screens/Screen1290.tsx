import { Pressable, Text, View } from 'react-native';

import { copy1290 } from '../generated/copy/copy1290';
import { layout1290 } from '../generated/layouts/layout1290';
import { palette1290 } from '../generated/palettes/palette1290';

export function Screen1290() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1290.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1290.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1290.detail} / {palette1290.name}
			</Text>
		</View>
	);
}
