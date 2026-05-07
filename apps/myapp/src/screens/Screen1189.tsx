import { Pressable, Text, View } from 'react-native';

import { copy1189 } from '../generated/copy/copy1189';
import { layout1189 } from '../generated/layouts/layout1189';
import { palette1189 } from '../generated/palettes/palette1189';

export function Screen1189() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1189.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1189.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1189.detail} / {palette1189.name}
			</Text>
		</View>
	);
}
