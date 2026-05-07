import { Pressable, Text, View } from 'react-native';

import { copy1133 } from '../generated/copy/copy1133';
import { layout1133 } from '../generated/layouts/layout1133';
import { palette1133 } from '../generated/palettes/palette1133';

export function Screen1133() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1133.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1133.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1133.detail} / {palette1133.name}
			</Text>
		</View>
	);
}
