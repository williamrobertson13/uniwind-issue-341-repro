import { Pressable, Text, View } from 'react-native';

import { copy372 } from '../generated/copy/copy372';
import { layout372 } from '../generated/layouts/layout372';
import { palette372 } from '../generated/palettes/palette372';

export function Screen372() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout372.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy372.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy372.detail} / {palette372.name}
			</Text>
		</View>
	);
}
