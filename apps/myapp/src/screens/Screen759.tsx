import { Pressable, Text, View } from 'react-native';

import { copy759 } from '../generated/copy/copy759';
import { layout759 } from '../generated/layouts/layout759';
import { palette759 } from '../generated/palettes/palette759';

export function Screen759() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout759.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy759.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy759.detail} / {palette759.name}
			</Text>
		</View>
	);
}
