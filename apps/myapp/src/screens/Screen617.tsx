import { Pressable, Text, View } from 'react-native';

import { copy617 } from '../generated/copy/copy617';
import { layout617 } from '../generated/layouts/layout617';
import { palette617 } from '../generated/palettes/palette617';

export function Screen617() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout617.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy617.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy617.detail} / {palette617.name}
			</Text>
		</View>
	);
}
