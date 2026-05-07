import { Pressable, Text, View } from 'react-native';

import { copy1015 } from '../generated/copy/copy1015';
import { layout1015 } from '../generated/layouts/layout1015';
import { palette1015 } from '../generated/palettes/palette1015';

export function Screen1015() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1015.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1015.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1015.detail} / {palette1015.name}
			</Text>
		</View>
	);
}
