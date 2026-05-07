import { Pressable, Text, View } from 'react-native';

import { copy544 } from '../generated/copy/copy544';
import { layout544 } from '../generated/layouts/layout544';
import { palette544 } from '../generated/palettes/palette544';

export function Screen544() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout544.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy544.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy544.detail} / {palette544.name}
			</Text>
		</View>
	);
}
