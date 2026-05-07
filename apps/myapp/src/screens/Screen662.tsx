import { Pressable, Text, View } from 'react-native';

import { copy662 } from '../generated/copy/copy662';
import { layout662 } from '../generated/layouts/layout662';
import { palette662 } from '../generated/palettes/palette662';

export function Screen662() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout662.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy662.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy662.detail} / {palette662.name}
			</Text>
		</View>
	);
}
