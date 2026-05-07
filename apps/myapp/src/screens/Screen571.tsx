import { Pressable, Text, View } from 'react-native';

import { copy571 } from '../generated/copy/copy571';
import { layout571 } from '../generated/layouts/layout571';
import { palette571 } from '../generated/palettes/palette571';

export function Screen571() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout571.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy571.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy571.detail} / {palette571.name}
			</Text>
		</View>
	);
}
