import { Pressable, Text, View } from 'react-native';

import { copy1207 } from '../generated/copy/copy1207';
import { layout1207 } from '../generated/layouts/layout1207';
import { palette1207 } from '../generated/palettes/palette1207';

export function Screen1207() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1207.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1207.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1207.detail} / {palette1207.name}
			</Text>
		</View>
	);
}
