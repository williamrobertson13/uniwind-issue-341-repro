import { Pressable, Text, View } from 'react-native';

import { copy1315 } from '../generated/copy/copy1315';
import { layout1315 } from '../generated/layouts/layout1315';
import { palette1315 } from '../generated/palettes/palette1315';

export function Screen1315() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1315.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1315.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1315.detail} / {palette1315.name}
			</Text>
		</View>
	);
}
