import { Pressable, Text, View } from 'react-native';

import { copy355 } from '../generated/copy/copy355';
import { layout355 } from '../generated/layouts/layout355';
import { palette355 } from '../generated/palettes/palette355';

export function Screen355() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout355.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy355.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy355.detail} / {palette355.name}
			</Text>
		</View>
	);
}
