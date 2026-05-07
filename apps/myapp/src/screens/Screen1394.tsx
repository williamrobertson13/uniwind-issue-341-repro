import { Pressable, Text, View } from 'react-native';

import { copy1394 } from '../generated/copy/copy1394';
import { layout1394 } from '../generated/layouts/layout1394';
import { palette1394 } from '../generated/palettes/palette1394';

export function Screen1394() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1394.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1394.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1394.detail} / {palette1394.name}
			</Text>
		</View>
	);
}
