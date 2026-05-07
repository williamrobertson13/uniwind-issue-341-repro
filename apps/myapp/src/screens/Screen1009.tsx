import { Pressable, Text, View } from 'react-native';

import { copy1009 } from '../generated/copy/copy1009';
import { layout1009 } from '../generated/layouts/layout1009';
import { palette1009 } from '../generated/palettes/palette1009';

export function Screen1009() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1009.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1009.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1009.detail} / {palette1009.name}
			</Text>
		</View>
	);
}
