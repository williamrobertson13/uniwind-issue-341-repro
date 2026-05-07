import { Pressable, Text, View } from 'react-native';

import { copy1202 } from '../generated/copy/copy1202';
import { layout1202 } from '../generated/layouts/layout1202';
import { palette1202 } from '../generated/palettes/palette1202';

export function Screen1202() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1202.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1202.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1202.detail} / {palette1202.name}
			</Text>
		</View>
	);
}
