import { Pressable, Text, View } from 'react-native';

import { copy1106 } from '../generated/copy/copy1106';
import { layout1106 } from '../generated/layouts/layout1106';
import { palette1106 } from '../generated/palettes/palette1106';

export function Screen1106() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1106.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1106.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1106.detail} / {palette1106.name}
			</Text>
		</View>
	);
}
