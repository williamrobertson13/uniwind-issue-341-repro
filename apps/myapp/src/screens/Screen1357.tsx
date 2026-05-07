import { Pressable, Text, View } from 'react-native';

import { copy1357 } from '../generated/copy/copy1357';
import { layout1357 } from '../generated/layouts/layout1357';
import { palette1357 } from '../generated/palettes/palette1357';

export function Screen1357() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1357.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1357.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1357.detail} / {palette1357.name}
			</Text>
		</View>
	);
}
