import { Pressable, Text, View } from 'react-native';

import { copy1061 } from '../generated/copy/copy1061';
import { layout1061 } from '../generated/layouts/layout1061';
import { palette1061 } from '../generated/palettes/palette1061';

export function Screen1061() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1061.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1061.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1061.detail} / {palette1061.name}
			</Text>
		</View>
	);
}
