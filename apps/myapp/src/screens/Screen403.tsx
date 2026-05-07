import { Pressable, Text, View } from 'react-native';

import { copy403 } from '../generated/copy/copy403';
import { layout403 } from '../generated/layouts/layout403';
import { palette403 } from '../generated/palettes/palette403';

export function Screen403() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout403.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy403.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy403.detail} / {palette403.name}
			</Text>
		</View>
	);
}
