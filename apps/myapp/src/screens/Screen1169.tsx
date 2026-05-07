import { Pressable, Text, View } from 'react-native';

import { copy1169 } from '../generated/copy/copy1169';
import { layout1169 } from '../generated/layouts/layout1169';
import { palette1169 } from '../generated/palettes/palette1169';

export function Screen1169() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1169.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1169.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1169.detail} / {palette1169.name}
			</Text>
		</View>
	);
}
