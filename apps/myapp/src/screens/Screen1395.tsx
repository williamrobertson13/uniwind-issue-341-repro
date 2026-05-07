import { Pressable, Text, View } from 'react-native';

import { copy1395 } from '../generated/copy/copy1395';
import { layout1395 } from '../generated/layouts/layout1395';
import { palette1395 } from '../generated/palettes/palette1395';

export function Screen1395() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1395.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1395.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1395.detail} / {palette1395.name}
			</Text>
		</View>
	);
}
