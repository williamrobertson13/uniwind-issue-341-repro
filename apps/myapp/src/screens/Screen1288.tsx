import { Pressable, Text, View } from 'react-native';

import { copy1288 } from '../generated/copy/copy1288';
import { layout1288 } from '../generated/layouts/layout1288';
import { palette1288 } from '../generated/palettes/palette1288';

export function Screen1288() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1288.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1288.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1288.detail} / {palette1288.name}
			</Text>
		</View>
	);
}
