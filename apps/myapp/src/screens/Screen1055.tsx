import { Pressable, Text, View } from 'react-native';

import { copy1055 } from '../generated/copy/copy1055';
import { layout1055 } from '../generated/layouts/layout1055';
import { palette1055 } from '../generated/palettes/palette1055';

export function Screen1055() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1055.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1055.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1055.detail} / {palette1055.name}
			</Text>
		</View>
	);
}
