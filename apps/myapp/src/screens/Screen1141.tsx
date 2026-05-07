import { Pressable, Text, View } from 'react-native';

import { copy1141 } from '../generated/copy/copy1141';
import { layout1141 } from '../generated/layouts/layout1141';
import { palette1141 } from '../generated/palettes/palette1141';

export function Screen1141() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1141.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1141.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1141.detail} / {palette1141.name}
			</Text>
		</View>
	);
}
