import { Pressable, Text, View } from 'react-native';

import { copy1227 } from '../generated/copy/copy1227';
import { layout1227 } from '../generated/layouts/layout1227';
import { palette1227 } from '../generated/palettes/palette1227';

export function Screen1227() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1227.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1227.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1227.detail} / {palette1227.name}
			</Text>
		</View>
	);
}
