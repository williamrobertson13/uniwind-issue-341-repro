import { Pressable, Text, View } from 'react-native';

import { copy1026 } from '../generated/copy/copy1026';
import { layout1026 } from '../generated/layouts/layout1026';
import { palette1026 } from '../generated/palettes/palette1026';

export function Screen1026() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1026.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1026.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1026.detail} / {palette1026.name}
			</Text>
		</View>
	);
}
