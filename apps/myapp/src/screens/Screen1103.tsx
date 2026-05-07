import { Pressable, Text, View } from 'react-native';

import { copy1103 } from '../generated/copy/copy1103';
import { layout1103 } from '../generated/layouts/layout1103';
import { palette1103 } from '../generated/palettes/palette1103';

export function Screen1103() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1103.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1103.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1103.detail} / {palette1103.name}
			</Text>
		</View>
	);
}
