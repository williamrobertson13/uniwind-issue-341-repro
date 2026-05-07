import { Pressable, Text, View } from 'react-native';

import { copy1019 } from '../generated/copy/copy1019';
import { layout1019 } from '../generated/layouts/layout1019';
import { palette1019 } from '../generated/palettes/palette1019';

export function Screen1019() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1019.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1019.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1019.detail} / {palette1019.name}
			</Text>
		</View>
	);
}
