import { Pressable, Text, View } from 'react-native';

import { copy1085 } from '../generated/copy/copy1085';
import { layout1085 } from '../generated/layouts/layout1085';
import { palette1085 } from '../generated/palettes/palette1085';

export function Screen1085() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1085.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1085.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1085.detail} / {palette1085.name}
			</Text>
		</View>
	);
}
