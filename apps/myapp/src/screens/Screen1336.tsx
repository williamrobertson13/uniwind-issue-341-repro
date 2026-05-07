import { Pressable, Text, View } from 'react-native';

import { copy1336 } from '../generated/copy/copy1336';
import { layout1336 } from '../generated/layouts/layout1336';
import { palette1336 } from '../generated/palettes/palette1336';

export function Screen1336() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1336.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1336.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1336.detail} / {palette1336.name}
			</Text>
		</View>
	);
}
