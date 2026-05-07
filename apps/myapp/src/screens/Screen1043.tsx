import { Pressable, Text, View } from 'react-native';

import { copy1043 } from '../generated/copy/copy1043';
import { layout1043 } from '../generated/layouts/layout1043';
import { palette1043 } from '../generated/palettes/palette1043';

export function Screen1043() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1043.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1043.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1043.detail} / {palette1043.name}
			</Text>
		</View>
	);
}
