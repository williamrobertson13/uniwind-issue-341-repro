import { Pressable, Text, View } from 'react-native';

import { copy419 } from '../generated/copy/copy419';
import { layout419 } from '../generated/layouts/layout419';
import { palette419 } from '../generated/palettes/palette419';

export function Screen419() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout419.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy419.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy419.detail} / {palette419.name}
			</Text>
		</View>
	);
}
