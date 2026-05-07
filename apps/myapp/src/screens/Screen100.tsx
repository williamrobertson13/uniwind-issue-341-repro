import { Pressable, Text, View } from 'react-native';

import { copy100 } from '../generated/copy/copy100';
import { layout100 } from '../generated/layouts/layout100';
import { palette100 } from '../generated/palettes/palette100';

export function Screen100() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout100.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy100.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy100.detail} / {palette100.name}
			</Text>
		</View>
	);
}
