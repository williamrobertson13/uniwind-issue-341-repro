import { Pressable, Text, View } from 'react-native';

import { copy1047 } from '../generated/copy/copy1047';
import { layout1047 } from '../generated/layouts/layout1047';
import { palette1047 } from '../generated/palettes/palette1047';

export function Screen1047() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1047.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1047.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1047.detail} / {palette1047.name}
			</Text>
		</View>
	);
}
