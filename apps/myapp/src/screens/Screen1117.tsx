import { Pressable, Text, View } from 'react-native';

import { copy1117 } from '../generated/copy/copy1117';
import { layout1117 } from '../generated/layouts/layout1117';
import { palette1117 } from '../generated/palettes/palette1117';

export function Screen1117() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1117.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1117.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1117.detail} / {palette1117.name}
			</Text>
		</View>
	);
}
