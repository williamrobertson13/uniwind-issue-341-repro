import { Pressable, Text, View } from 'react-native';

import { copy1298 } from '../generated/copy/copy1298';
import { layout1298 } from '../generated/layouts/layout1298';
import { palette1298 } from '../generated/palettes/palette1298';

export function Screen1298() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1298.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1298.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1298.detail} / {palette1298.name}
			</Text>
		</View>
	);
}
