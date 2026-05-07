import { Pressable, Text, View } from 'react-native';

import { copy1007 } from '../generated/copy/copy1007';
import { layout1007 } from '../generated/layouts/layout1007';
import { palette1007 } from '../generated/palettes/palette1007';

export function Screen1007() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1007.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1007.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1007.detail} / {palette1007.name}
			</Text>
		</View>
	);
}
