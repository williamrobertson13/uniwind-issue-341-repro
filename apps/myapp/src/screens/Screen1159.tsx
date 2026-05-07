import { Pressable, Text, View } from 'react-native';

import { copy1159 } from '../generated/copy/copy1159';
import { layout1159 } from '../generated/layouts/layout1159';
import { palette1159 } from '../generated/palettes/palette1159';

export function Screen1159() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1159.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1159.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1159.detail} / {palette1159.name}
			</Text>
		</View>
	);
}
