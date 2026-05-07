import { Pressable, Text, View } from 'react-native';

import { copy140 } from '../generated/copy/copy140';
import { layout140 } from '../generated/layouts/layout140';
import { palette140 } from '../generated/palettes/palette140';

export function Screen140() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout140.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy140.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy140.detail} / {palette140.name}
			</Text>
		</View>
	);
}
