import { Pressable, Text, View } from 'react-native';

import { copy895 } from '../generated/copy/copy895';
import { layout895 } from '../generated/layouts/layout895';
import { palette895 } from '../generated/palettes/palette895';

export function Screen895() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout895.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy895.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy895.detail} / {palette895.name}
			</Text>
		</View>
	);
}
