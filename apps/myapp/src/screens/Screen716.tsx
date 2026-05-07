import { Pressable, Text, View } from 'react-native';

import { copy716 } from '../generated/copy/copy716';
import { layout716 } from '../generated/layouts/layout716';
import { palette716 } from '../generated/palettes/palette716';

export function Screen716() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout716.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy716.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy716.detail} / {palette716.name}
			</Text>
		</View>
	);
}
